robocopy "..\src" "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kmpmp" /MIR /XF thumbnail* /XD .metadata
New-Item "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kmpmp\.metadata" -Type directory -Force
Copy-Item "..\src\.metadata\metadata_kmpmp.json" -Destination "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kmpmp\.metadata\metadata.json" -Force
Copy-Item "..\src\thumbnail_kmpmp.png" -Destination "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kmpmp\thumbnail.png" -Force