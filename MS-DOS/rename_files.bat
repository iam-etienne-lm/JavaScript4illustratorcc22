@echo off
ren "DAO 312454*.pdf" "DAO 312818*.tmp"
ren *.tmp *.pdf
echo done
pause

::ELSE
::cd /d "C:/TempAi/F5"
::SET proj = 012345
::for %%i in (*.pdf) do REN "%%i" "cad 012345-10A FORMATG-01-2%%~ni.tmp"
