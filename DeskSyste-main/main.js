const { app, BrowserWindow, ipcMain } = require('electron');
const { createWindowHome } = require('./src/app/main');
const { createSplashScreen } = require('./src/components/splash/main');
const { createDatabase } = require('./src/server/create-database');

ipcMain.on('checkUserData', () => {
  createWindowHome();
});

app.whenReady().then(() => {
  createSplashScreen();
  createDatabase();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindowHome()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})