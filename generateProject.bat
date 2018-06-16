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

set fromDir=%cd%\
set target=%cd%\..\generatedModules\%moduleName1%

mkdir %target%
xxcopy /Y /S /Q "%fromDir%" "%target%"
rmdir /S /Q %target%\node_modules
rmdir /S /Q %target%\.bower
rmdir /S /Q %target%\.idea
rmdir /S /Q %target%\src\vendor


fart.exe -r -c -- %target%\src\* AutomizySkeletonProjectDescription "%moduleDescription%"
fart.exe -r -c -- %target%\src\* Automizy-Skeleton-Project %moduleName1%
fart.exe -r -c -- %target%\src\* AutomizySkeletonProject %moduleName2%
fart.exe -r -c -- %target%\src\* automizy-skeleton-project %moduleName3%
fart.exe -r -c -- %target%\src\* asp %moduleNameshort%
fart.exe -r -c -- %target%\src\* $ASP %moduleVariable%

fart.exe -c -- %target%\* AutomizySkeletonProjectDescription "%moduleDescription%"
fart.exe -c -- %target%\* Automizy-Skeleton-Project %moduleName1%
fart.exe -c -- %target%\* AutomizySkeletonProject %moduleName2%
fart.exe -c -- %target%\* automizy-skeleton-project %moduleName3%
fart.exe -c -- %target%\* asp %moduleNameshort%
fart.exe -c -- %target%\* $ASP %moduleVariable%

ren %target%\src\asp.html %moduleNameshort%.html
ren %target%\src\asp.js %moduleNameshort%.js
ren %target%\src\asp.css %moduleNameshort%.css

cd %~dp0\%target%

npm install & bower update & grunt bower

echo New module created!
pause;

:EXIT0