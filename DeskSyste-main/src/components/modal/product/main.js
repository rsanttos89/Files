const { BrowserWindow, ipcMain } = require('electron');

let modalWindow;

function createModalWindowProduct(parentWindow) {
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

  modalWindow.loadFile('./src/components/modal/product/index.html');
  // modalWindow.webContents.openDevTools();

  // TOP BAR ---------------------------------------------------------------------------
  ipcMain.on('minimizeModalProduct', () => {
    modalWindow.minimize();
  });

  ipcMain.on('closeModalProduct', () => {
    modalWindow.close();
  });

  // ---------------------------------------------------------------------------
  modalWindow.once('ready-to-show', () => {
    modalWindow.show();
  });

  return modalWindow; // Retorne a janela modal para que possa ser usada novamente se necessário
}

module.exports = {
  createModalWindowProduct
};