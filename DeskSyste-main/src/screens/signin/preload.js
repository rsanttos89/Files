const { shell } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const { login, logout } = require('../../server/auth');

  const submitForm = document.getElementById('form');
  submitForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let username = document.querySelector('#email').value;
    let password = document.querySelector('#pass').value;

    console.log(username)
    login(username, password);

    document.getElementById('submit').style.display = 'none';
    document.getElementById('loading').style.display = 'flex';
  });

  const emailInput = document.getElementById('email');
  emailInput.focus();
  emailInput.select();

  document.getElementById('link').addEventListener('click', (event) => {
    event.preventDefault();
    shell.openExternal('http://globo.com');
  });
})