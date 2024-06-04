<?php $title = "rosy store";?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="..." />

  <meta name="theme-color" content="#fff" />
  <link rel="apple-touch-icon" href="../public/assets/icons-pwa/logo192.png" />
  <link rel="shortcut icon" href="../public/assets/favicon.ico" type="image/x-icon" />
  <link rel="manifest" href="../manifest.json" />

  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  <link rel="stylesheet" href="../public/styles/home.css" />

  <title>RosyStore</title>
</head>
<body>
  <?php include_once './includes/header.php';?>
  <?php include_once './includes/banner.php';?>

  <main>
    <?php include_once './includes/aside.php';?>

    <div id="body">
      <div class="products-list">
        <?php
          // URL que contém os dados JSON
          $json_url = 'https://rosystore.com.br/sua-rota-para-os-dados-json';

          // Faz a requisição HTTP e obtém o conteúdo JSON
          $json_data = file_get_contents($json_url);

          // Decodifica o JSON em um array associativo
          $data = json_decode($json_data, true);

          // Verifica se a decodificação foi bem-sucedida
          if ($data !== null) {
              // Itera sobre os dados e exibe as informações
              foreach ($data['produtos'] as $produto) {
                  echo '
                      <a href="./products/detail/' . $produto['slug'] . '" rel="noopener noreferrer">
                          <div class="box-txt">
                              <h2>' . $produto['nome'] . '</h2>
                          </div>
                          <img src="../public/assets/products/' . $produto['imagem'] . '" alt="products" />
                          <div class="box-txt">
                              <p>R$' . number_format($produto['preco'], 2, ',', '.') . '</p>
                          </div>
                      </a>
                  ';
              }
          } else {
              echo 'Produtos não cadastrados';
          }
        ?>
      </div>
    </div>
  </main>

  <?php include_once './includes/mobile/footer.php';?>

<script>
  /** -------------------------- SERVICE WORKER ------------------------------------------- */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('../service_worker.js').then(function(registration) {
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