const sqlite3 = require('sqlite3').verbose();
const { BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let loadingScreen;
const { createWindowSignIn } = require('../../screens/signin/main');

function createSplashScreen() {
  loadingScreen = new BrowserWindow({
    width: 300,
    height: 200,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    devTools: true,
  });
  loadingScreen.loadFile(path.join(__dirname, '../splash/index.html'));

  ipcMain.on('closeLoading', () => {
    if (loadingScreen && !loadingScreen.isDestroyed()) {
      loadingScreen.close();
      loadingScreen = null;
      createWindowSignIn();
    }
  });

  setTimeout(() => {
    ipcMain.emit('closeLoading');
  }, 1000);
}

module.exports = {
  createSplashScreen,
};