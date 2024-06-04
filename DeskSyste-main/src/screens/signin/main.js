const { BrowserWindow, ipcMain } = require('electron');

function createWindowSignIn() {
  const windowSignIn = new BrowserWindow({
    width: 500,
    height: 500,
    title: 'LOG IN TO YOUR ACCOUNT',
    frame: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      contextIsolation: false,
    },
    resizable: false,
    maximizable: false,
    minimizable: false,
    fullscreenable: false, // Impede a janela de ser colocada em tela cheia
  });

  windowSignIn.center();
  windowSignIn.setMenu(null); // Remove o menu padrão
  windowSignIn.loadFile('./src/screens/signin/index.html');

  // windowSignIn.webContents.openDevTools();

  // header tab bar
  ipcMain.on('minimizeSignin', () => {
    windowSignIn.minimize();
  });

  ipcMain.on('closeSignin', () => {
    windowSignIn.close();
  });

  ipcMain.on('closeScreenSignin', () => {
    windowSignIn.close();
  });

  ipcMain.on('closeAppSignin', () => {
    windowSignIn.close();
  });
}

module.exports = {
  createWindowSignIn
};
