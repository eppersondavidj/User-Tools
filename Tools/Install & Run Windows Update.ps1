Set-ExecutionPolicy -ExecutionPolicy bypass
net stop wuauserv
#net stop cryptSvc
#net stop bits
net stop msiserver
ren C:\Windows\SoftwareDistribution SoftwareDistribution.old
ren C:\Windows\System32\catroot2 catroot2.old
Remove-Item -path C:\Windows\SoftwareDistribution.old -Recurse -Force -confirm:$false
Remove-Item -path C:\Windows\catroot2.old -Recurse -Force -confirm:$false
Remove-Item -Path 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate' -Recurse -Force
net start wuauserv
#net start cryptSvc
#net start bits
net start msiserver
Install-Module -Name pswindowsupdate -force
Get-Package -Name PSWindowsUpdate
Import-Module PSWindowsUpdate
sfc /scannow
DISM.exe /Online /Cleanup-image /Restorehealth
Get-WindowsUpdate -AcceptAll -Install -IgnoreReboot
#Get-WindowsUpdate -Install -IgnoreReboot -KBArticleID KB5043064
#Get-WUList > C:\apps\updates.txt
#Get-WUHistory > C:\apps\updated.txt
#Get-hotfix KB5014032
#DISM.exe /Online /Add-Package /PackagePath:C:\Windows\SoftwareDistribution\Download\ecae61a3871ed76fb56b012e20bfa2d1\Windows10.0-KB5050008-x64.cab