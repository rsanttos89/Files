<?php
  session_start();

  // Verificar se o usuário está logado
  if (!isset($_SESSION['user'])) {
    // Se o usuário não estiver logado, redirecione para a página de login
    header("Location: ../login/");
    exit; // Certifique-se de sair após redirecionar para evitar que o script continue sendo executado
  }

  // Verificar se o formulário de logout foi enviado
  if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['logout'])) {
    // Destruir todas as variáveis de sessão
    session_unset();
    // Destruir a sessão
    session_destroy();
    // Redirecionar para a página de login
    header("Location: ../login/");
    exit;
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
</head>
<body>
  <h1>Dashboard</h1>
  <p>Bem-vindo, <?php echo $_SESSION['user']['username']; ?>!</p>
  <form action="" method="post">
    <input type="submit" name="logout" value="Logout">
  </form>
</body>
</html>