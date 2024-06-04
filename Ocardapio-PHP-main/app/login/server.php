<?php
  session_start();

  // Inclua o arquivo de configuração do banco de dados
  require_once 'config.php';

  // Função para proteger contra XSS
  function sanitizeString($string) {
    return htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
  }

  // Proteção contra CSRF
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verificar se o token CSRF foi enviado e se é válido
    if (!isset($_SESSION['csrf_token']) || !isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
      echo json_encode(['success' => false, 'message' => 'Token CSRF inválido']);
      exit;
    }
  }

  // Verificar se o email e senha correspondem
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $password = isset($_POST['password']) ? sanitizeString($_POST['password']) : null;

    if (!$email || !$password) {
      echo json_encode(['success' => false, 'message' => 'Email ou senha inválidos']);
      exit;
    }

    try {
      // Preparar e executar a consulta SQL
      $stmt = $pdo->prepare('SELECT * FROM users WHERE email = :email');
      $stmt->execute(['email' => $email]);
      $user = $stmt->fetch();

      // Verificar se o usuário foi encontrado e a senha está correta
      if ($user && hash_equals($user['password'], md5($password))) { // Comparando com o hash MD5 no banco de dados
        $_SESSION['user'] = $user;
        echo json_encode(['success' => true, 'user' => $user]);
      } else {
        echo json_encode(['success' => false, 'message' => 'Email ou senha incorretos']);
      }
    } catch (PDOException $e) {
      echo json_encode(['success' => false, 'message' => 'Erro na consulta ao banco de dados: ' . $e->getMessage()]);
    }
  }
?>