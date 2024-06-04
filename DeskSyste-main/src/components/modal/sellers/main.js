const { BrowserWindow, ipcMain } = require('electron');

let modalWindow;

function createModalWindowSellers(parentWindow) {
  modalWindow = new BrowserWindow({
    parent: true,
    modal: true,
    show: false,
    width: 600,
    height:600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    frame: false,
  });

  modalWindow.center();
  modalWindow.setMenu(null);

  modalWindow.loadFile('./src/components/modal/sellers/index.html');
  // modalWindow.webContents.openDevTools();

  // TOP BAR ---------------------------------------------------------------------------
  ipcMain.on('minimizeModalSellers', () => {
    modalWindow.minimize();
  });

  ipcMain.on('closeModalSellers', () => {
    modalWindow.close();
  });

  // ---------------------------------------------------------------------------
  modalWindow.once('ready-to-show', () => {
    modalWindow.show();
  });

  return modalWindow; // Retorne a janela modal para que possa ser usada novamente se necessário
}

module.exports = {
  createModalWindowSellers
};