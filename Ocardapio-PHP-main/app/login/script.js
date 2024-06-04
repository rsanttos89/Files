document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validação básica no lado do cliente
  if (!validateEmail(email)) {
    document.getElementById('message').innerText = 'Email inválido';
    return;
  }

  if (!validatePassword(password)) {
    document.getElementById('message').innerText = 'Senha inválida';
    return;
  }

  // Fetch para obter o token CSRF
  fetch('./get_csrf_token.php')
    .then(response => response.json())
    .then(data => {
      const csrfToken = data.csrf_token;

      // Incluir o token CSRF e a senha no corpo da requisição
      fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&csrf_token=${encodeURIComponent(csrfToken)}`
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem('user', JSON.stringify(data.user));
          document.getElementById('message').innerText = 'Login bem-sucedido!';
          // Redirecionar para a página de perfil, por exemplo
          window.location.href = '../dashboard/';
        } else {
          document.getElementById('message').innerText = 'Falha no login: ' + data.message;
        }
      })
      .catch(error => {
        document.getElementById('message').innerText = 'Erro: ' + error;
      });
    })
    .catch(error => {
      document.getElementById('message').innerText = 'Erro ao obter token CSRF: ' + error;
    });
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  // Exemplo de validação de senha (pelo menos 8 caracteres)
  return password.length >= 8;
}