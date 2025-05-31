# Variables \/
$Path = $env:TEMP
$Installer = 'chrome_installer.msi'

# Flow \/
Invoke-WebRequest -Uri 'https://dl.google.com/dl/chrome/install/googlechromestandaloneenterprise64.msi' -OutFile $Path\$Installer
if (test-path "$Path\$Installer"){
    $arguments = "/i $Path\$Installer /qn /quiet /norestart "
    Start-Process -FilePath msiexec.exe -ArgumentList "$arguments" -Wait
    Remove-Item -Path $Path\$Installer
} else {
    exit 404
}