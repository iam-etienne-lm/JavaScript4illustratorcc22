@echo off
setlocal

::explorer snap1
Start explorer.exe

::explorer snap2
::Start explorer.exe

::loupe %windir%\system32\magnify.exe
start %windir%\system32\magnify.exe

TIMEOUT /T 27 /NOBREAK
::Ai
cd "%ProgramFiles%\Adobe\Adobe Illustrator CC 2017\Support Files\Contents\Windows\" & Start Illustrator.exe

TIMEOUT /T 1 /NOBREAK
::ie11
::cd "%ProgramFiles%\Internet Explorer\" & Start iexplore.exe -private https://duckduckgo.com

TIMEOUT /T 1 /NOBREAK
::ffp with a shortcut
::"C:\Users\user1\Documents\archive\temp int\FirefoxPortable_54.0_English.paf\FirefoxPortable.exe" -private gist.github.com adobe.com/community bbc.co.uk/radio/player/bbc_radio_one#
ffp.lnk

::=====================================================================
::template (short cmd)
::cd "%ProgramFiles%\monAppli\" & Start appli.exe myParam
