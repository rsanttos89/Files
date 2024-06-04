<?php
  session_start();

  // Gerar e armazenar o token CSRF na sessão, se ainda não estiver definido
  if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
  }

  // Retornar o token CSRF como resposta
  header('Content-Type: application/json');
  echo json_encode(['csrf_token' => $_SESSION['csrf_token']]);