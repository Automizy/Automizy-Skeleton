@echo off
set /p moduleName1="Module name like Automizy-Email-Editor: "
set /p moduleName2="Module name like AutomizyEmailEditor: "
set /p moduleName3="Module name like automizy-email-editor: "
set /p moduleNameshort="Module name in short like aee: "
set /p moduleVariable="Module showrt variable like $AEE: "
set /p moduleDescription="Module description: "

set isConfirm=y
set /p isConfirm=Please confirm the new module informations [y/n] (default - y)?:

IF NOT "%isConfirm%"=="y" GOTO EXIT0

set target=..\generatedModules\%moduleName1%

mkdir %target%
xcopy /Y /S /Q "." "%target%"


fart.exe -r -c -- %target%\src\* Automizy-Skeleton-Project %moduleName1%
fart.exe -r -c -- %target%\src\* AutomizySkeletonProject %moduleName2%
fart.exe -r -c -- %target%\src\* automizy-skeleton-project %moduleName3%
fart.exe -r -c -- %target%\src\* asp %moduleNameshort%
fart.exe -r -c -- %target%\src\* $ASP %moduleVariable%
fart.exe -r -c -- %target%\src\* AutomizySkeletonProjectDescription "%moduleDescription%"

fart.exe -c -- %target%\* Automizy-Skeleton-Project %moduleName1%
fart.exe -c -- %target%\* AutomizySkeletonProject %moduleName2%
fart.exe -c -- %target%\* automizy-skeleton-project %moduleName3%
fart.exe -c -- %target%\* asp %moduleNameshort%
fart.exe -c -- %target%\* $ASP %moduleVariable%
fart.exe -c -- %target%\* AutomizySkeletonProjectDescription "%moduleDescription%"

ren %target%\src\asp.html %moduleNameshort%.html
ren %target%\src\asp.js %moduleNameshort%.js
ren %target%\src\asp.css %moduleNameshort%.css

cd %~dp0\%target%
call npmBowerGrunt.bat

echo New module created!
pause;

:EXIT0