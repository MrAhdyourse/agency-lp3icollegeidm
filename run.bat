@echo off
setlocal enabledelayedexpansion

:: PINDAH KE FOLDER PROYEK
cd /d "%~dp0"

:: SET PATH GIT LANGSUNG
set "GIT=C:\Program Files\Git\cmd\git.exe"

title AGENCY-WNI

:menu
cls
echo.
echo  ==================================================
echo.
echo          AGENCY-WNI - Website Portal
echo          LP3I College - Rekanan Agensi
echo.
echo  ==================================================
echo.
echo   PILIH MENU:
echo.
echo   [1] JALANKAN WEBSITE (Lihat di Browser)
echo       - Buka website lokal untuk editing
echo.
echo   [2] BUILD (Masak jadi file statis)
echo       - Siapkan file untuk upload ke GitHub
echo.
echo   [3] PUSH KE GITHUB (Upload Otomatis)
echo       - Build + Upload dalam 1 klik
echo.
echo   [4] INSTALL DEPENDENCIES
echo       - Install library (hanya pertama kali)
echo.
echo   [5] KELUAR
echo.
echo  ==================================================
echo.
set /p choice="Masukkan pilihan [1-5]: "

if "%choice%"=="1" goto jalankan
if "%choice%"=="2" goto build
if "%choice%"=="3" goto push
if "%choice%"=="4" goto install
if "%choice%"=="5" goto keluar

echo.
echo  [!] Pilihan tidak valid! Coba lagi...
timeout /t 2 >nul
goto menu

:jalankan
cls
echo.
echo  ==================================================
echo   JALANKAN WEBSITE LOKAL
echo  ==================================================
echo.
echo  Memulai server... Mohon tunggu...
echo.
echo  [INFO] Server akan jalan di: http://localhost:3000
echo  [INFO] Browser akan terbuka otomatis setelah siap
echo  [INFO] Tutup window ini untuk menghentikan server
echo.
echo  ==================================================
echo.

:: Buka browser setelah 5 detik
start "" cmd /c "timeout /t 5 >nul && start http://localhost:3000"

:: Jalankan server
call npm run dev
goto menu

:build
cls
echo.
echo  ==================================================
echo   BUILD - Memasak Website
echo  ==================================================
echo.
echo  Sedang memproses...
echo.
call npm run build
if %errorlevel% equ 0 (
    echo.
    echo  [SUKSES] Build selesai!
    echo  [INFO] File statis ada di folder: out/
) else (
    echo.
    echo  [GAGAL] Build error! Cek pesan di atas.
)
echo.
pause
goto menu

:push
cls
echo.
echo  ==================================================
echo   PUSH KE GITHUB - Upload Otomatis
echo  ==================================================
echo.

:: Cek Git
"%GIT%" --version >nul 2>&1
if %errorlevel% neq 0 (
    echo  [ERROR] Git tidak ditemukan!
    echo  [INFO] Pastikan Git sudah terinstall di:
    echo         C:\Program Files\Git\
    pause
    goto menu
)

:: Cek apakah sudah ada git repo
if not exist ".git" (
    echo  [INFO] Inisialisasi Git repository...
    "%GIT%" init
    "%GIT%" remote add origin https://github.com/MrAhdyourse/agency-lp3icollegeidm.git
)

echo  [LANGKAH 1] Build website...
echo.
call npm run build
if %errorlevel% neq 0 (
    echo.
    echo  [GAGAL] Build error! Upload dibatalkan.
    pause
    goto menu
)
echo.
echo  [SUKSES] Build selesai!
echo.
echo  [LANGKAH 2] Menyiapkan file...
"%GIT%" add .
echo.
set /p msg="  [LANGKAH 3] Pesan commit: "
if "!msg!"=="" set msg=Update website
"%GIT%" commit -m "!msg!"
echo.
echo  [LANGKAH 4] Upload ke GitHub...
"%GIT%" push -u origin main
if %errorlevel% equ 0 (
    echo.
    echo  ==================================================
    echo  [SUKSES] Website sudah ONLINE!
    echo  ==================================================
    echo.
    echo  Buka: https://mrahdyourse.github.io/agency-lp3icollegeidm
    echo.
) else (
    echo.
    echo  [GAGAL] Push error! Cek koneksi atau authentication.
    echo  [INFO] Pastikan sudah login GitHub atau punya token.
)
echo.
pause
goto menu

:install
cls
echo.
echo  ==================================================
echo   INSTALL DEPENDENCIES
echo  ==================================================
echo.
echo  Menginstall library yang dibutuhkan...
echo.
call npm install
echo.
if %errorlevel% equ 0 (
    echo  [SUKSES] Install selesai!
) else (
    echo  [GAGAL] Install error!
)
echo.
pause
goto menu

:keluar
cls
echo.
echo  ==================================================
echo.
echo        Terima kasih! Sampai jumpa!
echo.
echo  ==================================================
echo.
timeout /t 2 >nul
exit
