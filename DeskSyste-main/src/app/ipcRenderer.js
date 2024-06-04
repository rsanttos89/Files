const { ipcRenderer } = require('electron');

// IPC BTNS MINIMIZE AND CLOSE ----------------------------------------------------------
const minimizeButton = document.getElementById('app-minimize');
minimizeButton.addEventListener('click', () => {
  ipcRenderer.send('minimizeApp');
})

const closeButton = document.getElementById('app-close');
closeButton.addEventListener('click', () => {
  ipcRenderer.send('closeApp');
})

const maximizeButton = document.getElementById('app-maximize');
maximizeButton.addEventListener('click', () => {
  ipcRenderer.send('maximizeRestoreApp');
})

const maximizeRestoreApp = document.getElementById('app-maximize');
function changeMaximizeRestoredBtn(isMaximizedApp) {
  if(isMaximizedApp) {
    maximizeRestoreApp.title = 'Restore';
    maximizeRestoreApp.classList.remove('maximize-button');
    maximizeRestoreApp.classList.add('restore-button');
  } else {
    maximizeRestoreApp.title = 'Maximize';
    maximizeRestoreApp.classList.remove('restore-button');
    maximizeRestoreApp.classList.add('maximize-button');
  }
}
ipcRenderer.on('isMaximized', () => { changeMaximizeRestoredBtn(true) });
ipcRenderer.on('isRestored', () => { changeMaximizeRestoredBtn(false) });

// ROUTES -------------------------------------------------------------------------------
const buttonEvents = [
  { id: 'screen-home', event: 'navigation-home' },
  { id: 'screen-products', event: 'navigation-products' },
  { id: 'navigation-products', event: 'navigation-products' },

  { id: 'screen-sellers', event: 'navigation-sellers' },
  { id: 'navigation-sellers', event: 'navigation-sellers' }
];

buttonEvents.forEach(({ id, event }) => {
  const button = document.getElementById(id);
  if (button) {
    button.addEventListener('click', () => {
      ipcRenderer.send(event);
    });
  }
});

// MODAL -------------------------------------------------------------------------------
// Verifica se o elemento com o ID 'open-modal-product' existe antes de adicionar o ouvinte de evento
const openModalButtonProduct = document.getElementById('open-modal-product');
if (openModalButtonProduct) {
  openModalButtonProduct.addEventListener('click', () => {
    ipcRenderer.send('openModalProduct');
  });
} else {
  console.log("Elemento 'open-modal-product' não encontrado!");
}

// Verifica se o elemento com o ID 'open-modal-category' existe antes de adicionar o ouvinte de evento
const openModalButtonCategory = document.getElementById('open-modal-category');
if (openModalButtonCategory) {
  openModalButtonCategory.addEventListener('click', () => {
    ipcRenderer.send('openModalCategory');
  });
} else {
  console.log("Elemento 'open-modal-category' não encontrado!");
}

// Verifica se o elemento com o ID 'open-modal-sellers' existe antes de adicionar o ouvinte de evento
const openModalButtonSellers = document.getElementById('open-modal-sellers');
if (openModalButtonSellers) {
  openModalButtonSellers.addEventListener('click', () => {
    ipcRenderer.send('openModalSellers');
  });
} else {
  console.log("Elemento 'open-modal-sellers' não encontrado!");
}