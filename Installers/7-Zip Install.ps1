 # Modern websites require TLS 1.2
 [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
  
 #requires -RunAsAdministrator
   
 # Let's go directly to the website and see what it lists as the current version
 $BaseUri = "https://www.7-zip.org/"
 $BasePage = Invoke-WebRequest -Uri ( $BaseUri + 'download.html' ) -UseBasicParsing
 # Determine bit-ness of O/S and download accordingly
 if ( [System.Environment]::Is64BitOperatingSystem ) {
     # The most recent 'current' (non-beta/alpha) is listed at the top, so we only need the first.
     $ChildPath = $BasePage.Links | Where-Object { $_.href -like '*7z*-x64.msi' } | Select-Object -First 1 | Select-Object -ExpandProperty href
 } else {
     # The most recent 'current' (non-beta/alpha) is listed at the top, so we only need the first.
     $ChildPath = $BasePage.Links | Where-Object { $_.href -like '*7z*.msi' } | Select-Object -First 1 | Select-Object -ExpandProperty href
 }
  
 # Let's build the required download link
 $DownloadUrl = $BaseUri + $ChildPath
  
 Write-Host "Downloading the latest 7-Zip to the temp folder"
 Invoke-WebRequest -Uri $DownloadUrl -OutFile "$PSScriptRoot\7zip.msi" | Out-Null
 Write-Host "Installing the latest 7-Zip"
 Start-Process -FilePath "$env:SystemRoot\system32\msiexec.exe" -ArgumentList "/package $PSScriptRoot\7zip.msi /qn" -Wait 
 