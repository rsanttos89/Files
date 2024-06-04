<?php
    header('Access-Control-Allow-Origin: *');
    
    // Informações adicionais do produto
    $productId = $_POST['productId'];
    $productName = $_POST['productName'];
    $saleValue = $_POST['saleValue'];

    // Sanitize input (exemplo básico)
    $productId = htmlspecialchars($productId);
    $productName = htmlspecialchars($productName);
    $saleValue = floatval($saleValue); // Certifique-se de validar o valor conforme necessário

    // Conexão com o banco de dados (substitua pelos detalhes reais do seu banco de dados)
    $servername = "localhost";
    $username = "u290991628_rosy_store";
    $password = "@B9118rss";
    $dbname = "u290991628_rosy_store";

    // Cria a conexão
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica a conexão
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Inclua a coluna upload_datetime na sua tabela para armazenar o timestamp
    $insertStmt = $conn->prepare("INSERT INTO Products (product_id, product_name, sale_value, upload_datetime) VALUES (?, ?, ?, NOW())");
    $insertStmt->bind_param("ssd", $productId, $productName, $saleValue);

    if ($insertStmt->execute()) {
        $data = ['success' => true, 'message' => 'Upload and move success'];
        echo json_encode($data);
    } else {
        $data = ['success' => false, 'message' => 'Error inserting data into database: ' . $insertStmt->error];
        echo json_encode($data);
    }

    $insertStmt->close();

    // Fecha a conexão com o banco de dados
    $conn->close();
?>
