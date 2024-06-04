const { ipcRenderer } = require('electron');

const minimizeButton = document.getElementById('minimize-signin');
minimizeButton.addEventListener('click', () => {
  ipcRenderer.send('minimizeSignin');
})

const closeButton = document.getElementById('close-signin');
closeButton.addEventListener('click', () => {
  ipcRenderer.send('closeSignin');
})