<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Obtém o conteúdo do corpo da solicitação
$inputJSON = file_get_contents('php://input');

// Decodifica o JSON para um array associativo
$inputData = json_decode($inputJSON, true);

// Verifica se os dados não estão vazios
$productCode = isset($inputData['ProductCode']) ? $inputData['ProductCode'] : null;
$imagePath = isset($inputData['ImagePath']) ? $inputData['ImagePath'] : null;

if ($productCode === null || $imagePath === null) {
    $data = ['success' => false, 'message' => 'ProductCode and ImagePath are required.'];
    echo json_encode($data);
    exit;
}

// Sanitize input (exemplo básico)
$productCode = htmlspecialchars($productCode);

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

// Divide a string de ImagePath em um array usando a vírgula como delimitador
$imagePathArray = explode(',', $imagePath);

// Inicia o loop para inserir cada valor separadamente
foreach ($imagePathArray as $imageName) {
    // Inclua a coluna upload_datetime na sua tabela para armazenar o timestamp
    $insertStmt = $conn->prepare("INSERT INTO product_images (ProductCode, ImagePath) VALUES (?, ?)");

    // Corrige a linha abaixo para refletir a variável correta
    $insertStmt->bind_param("ss", $productCode, $imageName);

    if (!$insertStmt->execute()) {
        $data = ['success' => false, 'message' => 'Error inserting data into database: ' . $insertStmt->error];
        echo json_encode($data);
        $insertStmt->close();
        $conn->close();
        exit;
    }

    $insertStmt->close();
}

// Todas as inserções foram bem-sucedidas, então envie a resposta de sucesso
$data = ['success' => true, 'message' => 'Upload and move success'];
echo json_encode($data);

// Fecha a conexão com o banco de dados
$conn->close();
?>
