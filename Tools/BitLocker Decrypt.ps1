# This script:
# 1 - Queries all mounted volumes using Get-Volume
# 2 - Assigns each a number for user selection
# 3 - Prompts the user to select which drive to decrypt
# 4 - Unlocks the drive if necessary using a 48-digit BitLocker recovery key
# 5 - Starts the decryption process using manage-bde
# 6 - Monitors the decryption progress and notifies the user when it's finished

Add-Type -AssemblyName System.Windows.Forms

# -------------------------------
# Function: Get-DriveList
# Description: Retrieves all mounted volumes with assigned drive letters,
#              and returns them as a numbered list for selection.
# -------------------------------
function Get-DriveList {
    $volumes = Get-Volume | Where-Object { $_.DriveLetter -ne $null }
    $volList = @()

    foreach ($vol in $volumes) {
        $volList += [PSCustomObject]@{
            Letter = "$($vol.DriveLetter):"
            Label  = $vol.FileSystemLabel
            FS     = $vol.FileSystem
            Size   = "{0:N2} GB" -f ($vol.Size / 1GB)
        }
    }

    return $volList
}

# -------------------------------
# Function: Show-Notification
# Description: Displays a popup message box when decryption is complete.
# -------------------------------
function Show-Notification {
    param([string]$msg)
    Add-Type -AssemblyName PresentationFramework
    [System.Windows.MessageBox]::Show($msg, "BitLocker Status")
}

# -------------------------------
# Function: Monitor-Decryption
# Description: Polls the selected drive every 10 seconds and checks if BitLocker
#              decryption is complete. Notifies the user once it's done.
# -------------------------------
function Monitor-Decryption($driveLetter) {
    while ($true) {
        $status = Get-BitLockerVolume -MountPoint $driveLetter
        if ($status.VolumeStatus -eq 'FullyDecrypted') {
            Show-Notification "Drive $driveLetter is fully decrypted."
            break
        } else {
            Write-Host "🔄 Decryption in progress on $driveLetter... $($status.EncryptionPercentage)% remaining" -ForegroundColor Yellow
        }
        Start-Sleep -Seconds 10
    }
}

# -------------------------------
# Main Script Logic Starts Here
# -------------------------------

# Step 1: Get list of mounted drives
$drives = Get-DriveList

# Step 2: Exit if no usable drives found
if ($drives.Count -eq 0) {
    Write-Host "❌ No volumes with drive letters found." -ForegroundColor Red
    exit
}

# Step 3: Present the list to the user
Write-Host "Select a drive to decrypt:"
for ($i = 0; $i -lt $drives.Count; $i++) {
    $drive = $drives[$i]
    Write-Host "$($i + 1): $($drive.Letter) - $($drive.Label) - $($drive.Size)"
}

# Step 4: Prompt user for selection
$selection = Read-Host "Enter the number of the drive to decrypt (1-$($drives.Count))"
if ($selection -notmatch '^\d+$' -or [int]$selection -lt 1 -or [int]$selection -gt $drives.Count) {
    Write-Host "❌ Invalid selection." -ForegroundColor Red
    exit
}

# Step 5: Extract selected drive letter
$selectedDrive = $drives[[int]$selection - 1].Letter

# Step 6: Check BitLocker status of selected drive
try {
    $bitlockerStatus = Get-BitLockerVolume -MountPoint $selectedDrive -ErrorAction Stop
} catch {
    Write-Host "❌ Could not get BitLocker status for $selectedDrive." -ForegroundColor Red
    exit
}

# Step 7: If the drive is locked, prompt for recovery key and unlock it
if ($bitlockerStatus.LockStatus -eq 'Locked') {
    $recoveryKey = Read-Host -Prompt "Drive $selectedDrive is locked. Enter 48-digit recovery key (no dashes)"
    if ($recoveryKey -notmatch '^\d{48}$') {
        Write-Host "❌ Invalid key format." -ForegroundColor Red
        exit
    }
    manage-bde -unlock $selectedDrive -RecoveryPassword $recoveryKey | Out-Null
    Start-Sleep -Seconds 2
}

# Step 8: If BitLocker is enabled, start decryption and monitor progress
#         If it's already disabled, notify the user immediately

if ($bitlockerStatus.VolumeStatus -eq 'FullyDecrypted') {
    Write-Host "✅ BitLocker is already disabled on $selectedDrive." -ForegroundColor Green
    Show-Notification "Drive $selectedDrive is already fully decrypted."
} else {
    Write-Host "Starting decryption on $selectedDrive..." -ForegroundColor Cyan
    manage-bde -off $selectedDrive | Out-Null
    Monitor-Decryption -driveLetter $selectedDrive
}
