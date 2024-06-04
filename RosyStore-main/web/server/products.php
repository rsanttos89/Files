<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Obtém o conteúdo do corpo da solicitação
$inputJSON = file_get_contents('php://input');

// Decodifica o JSON para um array associativo
$inputData = json_decode($inputJSON, true);

// Verifica se os dados não estão vazios
$productCode = isset($inputData['product_code']) ? $inputData['product_code'] : null;
$productName = isset($inputData['product_name']) ? $inputData['product_name'] : null;
$sellingPrice = isset($inputData['selling_price']) ? $inputData['selling_price'] : null;

$purchasePrice = isset($inputData['purchase_price']) ? $inputData['purchase_price'] : null;
$sizeType = isset($inputData['size_type']) ? $inputData['size_type'] : null;
$category = isset($inputData['category']) ? $inputData['category'] : null;
$productSize = isset($inputData['product_size']) ? $inputData['product_size'] : null;
$productDescription = isset($inputData['product_description']) ? $inputData['product_description'] : null;
$stockQuantity = isset($inputData['stock_quantity']) ? $inputData['stock_quantity'] : null;

if ($productCode === null) {
    $data = ['success' => false, 'message' => 'ProductCode is required.'];
    echo json_encode($data);
    exit;
}

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

// Corrige a declaração SQL para incluir os campos corretos
$insertStmt = $conn->prepare("INSERT INTO products (product_code, product_name, selling_price, purchase_price, size_type, category, product_size, product_description, stock_quantity) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

// Corrige a linha abaixo para refletir as variáveis corretas
$insertStmt->bind_param("ssddssssi", $productCode, $productName, $sellingPrice, $purchasePrice, $sizeType, $category, $productSize, $productDescription, $stockQuantity);

if (!$insertStmt->execute()) {
    $data = ['success' => false, 'message' => 'Error inserting data into database: ' . $insertStmt->error];
    echo json_encode($data);
    $insertStmt->close();
    $conn->close();
    exit;
}

$insertStmt->close();

// Todas as inserções foram bem-sucedidas, então envie a resposta de sucesso
$data = ['success' => true, 'message' => 'Upload and move success'];
echo json_encode($data);

// Fecha a conexão com o banco de dados
$conn->close();
?>
