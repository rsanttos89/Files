const { createModalWindowProduct } = require('../components/modal/product/main');
const { createModalWindowCategory } = require('../components/modal/category/main');
const { createModalWindowSellers } = require('../components/modal/sellers/main');

const { BrowserWindow, ipcMain } = require('electron')
const path = require('path');

let modalWindowProduct;
let modalWindow;

function createWindowHome () {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    minHeight: 720,
    minWidth: 1280,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, './preload.js')
    },
    // maximizable: false, // Impede a maximização
    // minimizable: false, // Impede a minimização
    
    // resizable: false, // Impede que a janela seja redimensionada
    frame: false // Remove a barra de título e a moldura da janela
  })

  win.center();
  win.setMenu(null);
  win.maximize();
  win.loadFile('src/screens/home/index.html');
  // win.webContents.openDevTools();

  // IPC MAIN BTNS MINIMIZE AND CLOSE -------------------------------------------------
  ipcMain.on('minimizeApp', () => {
    win.minimize();
  });

  ipcMain.on('closeApp', () => {
    win.close();
  });

  ipcMain.on('maximizeRestoreApp', () => {
    if(win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
    }
  })

  win.on('maximize', () => {
    win.webContents.send('isMaximized');
  });

  win.on('unmaximize', () => {
    win.webContents.send('isRestored');
  });

  // ROUTES ---------------------------------------------------------------------------
  const navigateTo = (fileName) => {
    win.loadFile(path.join(__dirname, fileName));
  }
  
  const navigationEvents = {
    'navigation-home': '../screens/home/index.html',
    'navigation-products': '../screens/products/index.html',
    'navigation-sellers': '../screens/sellers/index.html'
  }
  
  Object.keys(navigationEvents).forEach((event) => {
    ipcMain.on(event, () => {
      navigateTo(navigationEvents[event]);
    });
  });

  // MODAL -----------------------------------------------------------------------------------
  ipcMain.on('openModalProduct', () => {
    if (modalWindowProduct) {
      modalWindowProduct.close();
      modalWindowProduct = null;
    }
    
    if (!modalWindowProduct) {
      // Create the modal window if it has not been created yet
      modalWindowProduct = createModalWindowProduct(win);
    } else {
      // If the modal window has already been created, simply bring it to the front
      modalWindowProduct.show();
    }

    modalWindowProduct.on('closed', () => {
      modalWindowProduct = null;
    });
  });

  // MODAL -----------------------------------------------------------------------------------
  ipcMain.on('openModalCategory', () => {
    if (modalWindow) {
      modalWindow.close();
      modalWindow = null;
    }
    
    if (!modalWindow) {
      // Create the modal window if it has not been created yet
      modalWindow = createModalWindowCategory(win);
    } else {
      // If the modal window has already been created, simply bring it to the front
      modalWindow.show();
    }

    modalWindow.on('closed', () => {
      modalWindow = null;
    });
  });

  // MODAL -----------------------------------------------------------------------------------
  ipcMain.on('openModalSellers', () => {
    if (modalWindow) {
      modalWindow.close();
      modalWindow = null;
    }
    
    if (!modalWindow) {
      // Create the modal window if it has not been created yet
      modalWindow = createModalWindowSellers(win);
    } else {
      // If the modal window has already been created, simply bring it to the front
      modalWindow.show();
    }

    modalWindow.on('closed', () => {
      modalWindow = null;
    });
  });
}

module.exports = {
  createWindowHome
};