const { ipcRenderer } = require('electron');

// IPC BTNS MINIMIZE AND CLOSE ----------------------------------------------------------
const minimizeButton = document.getElementById('modal-minimize-sellers');
minimizeButton.addEventListener('click', () => {
  ipcRenderer.send('minimizeModalSellers');
});

const closeButton = document.getElementById('modal-close-sellers');
closeButton.addEventListener('click', () => {
  ipcRenderer.send('closeModalSellers');
});