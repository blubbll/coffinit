@echo OFF
setlocal
cd /d %~dp0
"%ProgramFiles%\nodejs\npm" audit fix
"%ProgramFiles%\nodejs\npm" i
exit /b 0