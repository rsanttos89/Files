const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  /** TIME ----------------------------------------- */

  function displayDateTime() {
      let now = new Date();
      let day = now.getDate();
      let month = now.toLocaleString('default', { month: 'long' });
      let hours = now.getHours();
      let minutes = now.getMinutes();
      
      document.getElementById('currentDateTime').textContent = day + ' de ' + month + ' ' + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
  }

  displayDateTime();
  setInterval(displayDateTime, 60000);
});