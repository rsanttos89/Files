const { ipcRenderer } = require('electron');

// IPC BTNS MINIMIZE AND CLOSE ----------------------------------------------------------
const minimizeButton = document.getElementById('modal-minimize-category');
minimizeButton.addEventListener('click', () => {
  ipcRenderer.send('minimizeModalCategory');
});

const closeButton = document.getElementById('modal-close-category');
closeButton.addEventListener('click', () => {
  ipcRenderer.send('closeModalCategory');
});