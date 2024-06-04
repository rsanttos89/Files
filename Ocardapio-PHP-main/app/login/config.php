<?php
	// Credenciais do banco de dados
	$host = 'localhost';
	$dbname = 'u290991628_ocardapio';
	$username = 'u290991628_ocardapio';
	$password = '@B9118rss';

	// Opções de conexão PDO
	$options = [
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
		PDO::ATTR_EMULATE_PREPARES => false,
	];

	// Tentar criar uma nova conexão PDO
	try {
		$pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password, $options);
	} catch (PDOException $e) {
		// Em caso de falha na conexão, exibir mensagem de erro
		die("Erro na conexão com o banco de dados: " . $e->getMessage());
	}
?>