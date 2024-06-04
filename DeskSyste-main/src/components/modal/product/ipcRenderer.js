const { ipcRenderer } = require('electron');

// IPC BTNS MINIMIZE AND CLOSE ----------------------------------------------------------
const minimizeButton = document.getElementById('modal-minimize-product');
minimizeButton.addEventListener('click', () => {
  ipcRenderer.send('minimizeModalProduct');
});

const closeButton = document.getElementById('modal-close-product');
closeButton.addEventListener('click', () => {
  ipcRenderer.send('closeModalProduct');
});