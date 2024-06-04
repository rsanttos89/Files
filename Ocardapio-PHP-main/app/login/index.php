<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="..." />
  <meta name="theme-color" content="#fff" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  <link rel="apple-touch-icon" href="../../public/assets/icons-pwa/logo192.png" />
  <link rel="shortcut icon" href="../../public/assets/favicon.ico" type="image/x-icon" />
  <link rel="manifest" href="../../manifest.json" />
  <link rel="stylesheet" href="./styles.css" />
  <script src="./script.js" defer></script>
  <title>Ocardápio - Faça login para iniciar</title>
</head>
<body>
  <main>
    <h1>Login</h1>
    <form id="loginForm">
      <input type="email" id="email" name="email" placeholder="E-mail" required><br>
      <input type="password" id="password" name="password" placeholder="Senha" required><br>
      <button type="submit">Entrar</button>
    </form>
    <div id="message"></div>
  </main>

  <script>
    /** -------------------------- SERVICE WORKER ------------------------------------------- */
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('../../service_worker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
        });
      });
    }
  </script>
</body>
</html>