# Remove conflicting registry entries for notepad
Remove-Item -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\notepad.exe\0" -Force
Remove-Item -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\notepad.exe\1" -Force
Remove-Item -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\notepad.exe\2" -Force

# Ensure the correct Debugger value is set
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\notepad.exe" `
-Name "Debugger" -Value '"C:\Program Files\Notepad++\notepad++.exe"'

# Display a restart message in yellow
Write-Host "Restart your machine for changes to take effect." -ForegroundColor Yellow

# Ask the user if they want to restart the PC now
$restart = Read-Host "Type '1' to restart now"

# If the user types '1', restart the computer
if ($restart -eq '1') {
    Restart-Computer -Force
}
else {
    Write-Host "No restart initiated. Please restart the machine later to apply the changes." -ForegroundColor Cyan
}



#To revert 
#Remove-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\notepad.exe" -Name "Debugger"

