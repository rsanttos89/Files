const { BrowserWindow, ipcMain } = require('electron');

let modalWindow;

function createModalWindowCategory(parentWindow) {
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

  modalWindow.loadFile('./src/components/modal/category/index.html');
  // modalWindow.webContents.openDevTools();

  // TOP BAR ---------------------------------------------------------------------------
  ipcMain.on('minimizeModalCategory', () => {
    modalWindow.minimize();
  });

  ipcMain.on('closeModalCategory', () => {
    modalWindow.close();
  });

  // ---------------------------------------------------------------------------
  modalWindow.once('ready-to-show', () => {
    modalWindow.show();
  });

  return modalWindow; // Retorne a janela modal para que possa ser usada novamente se necessário
}

module.exports = {
  createModalWindowCategory
};