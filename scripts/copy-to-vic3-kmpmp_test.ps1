robocopy "..\src" "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kmpmp-test" /MIR /XF thumbnail* /XD .metadata
robocopy "..\src_test" "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kmpmp-test" /E /XF thumbnail* /XF _placeholder.txt /XF _placeholder.gui /XF _placeholder.yml /XD .metadata
New-Item "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kmpmp-test\.metadata" -Type directory -Force
Copy-Item "..\src\.metadata\metadata_kmpmp_test.json" -Destination "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kmpmp-test\.metadata\metadata.json" -Force
Copy-Item "..\src\thumbnail_kmpmp_test.png" -Destination "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kmpmp-test\thumbnail.png" -Force