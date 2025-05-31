# Define the URL to the Notepad++ download page
$nppReleasesPage = "https://notepad-plus-plus.org/downloads/"

# Get the latest version directory from the HTML
$response = Invoke-WebRequest -Uri $nppReleasesPage
$latestVersion = ($response.Links | Where-Object { $_.href -match "^/downloads/v\d+\.\d+(\.\d+)*/$" }) `
    | Sort-Object href -Descending `
    | Select-Object -First 1

if (-not $latestVersion) {
    Write-Error "Could not find the latest Notepad++ version."
    exit 1
}

# Build the actual download page URL
$versionUrl = "https://notepad-plus-plus.org" + $latestVersion.href

# Scrape the actual installer URL from the version page
$versionPage = Invoke-WebRequest -Uri $versionUrl
$installerLink = ($versionPage.Links | Where-Object {
    $_.href -match "x64.*Installer\.exe$" -and $_.href -match "^https://"
}) | Select-Object -First 1

if (-not $installerLink) {
    Write-Error "Could not find the x64 Installer download link."
    exit 1
}

# Define local download path
$installerUrl = $installerLink.href
$installerPath = "$env:TEMP\NotepadPP_Installer.exe"

Write-Output "Downloading from: $installerUrl"
Invoke-WebRequest -Uri $installerUrl -OutFile $installerPath

# Run the installer silently
Write-Output "Running installer..."
Start-Process -FilePath $installerPath -ArgumentList "/S" -Wait

# Cleanup
Remove-Item $installerPath -Force
Write-Output "Notepad++ installation complete."
