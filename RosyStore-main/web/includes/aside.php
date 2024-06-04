<head>
  <style>
    aside {
      display: none;
      width: 300px;
      padding: 0px 8px;
    }

    aside h3 {
      font-size: 1.3rem;
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 8px;
    }

    aside .box-filter {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    aside .box-filter span {
      font-size: 1rem;
      text-transform: uppercase;
    }

    aside .box-filter span:nth-child(2) {
      min-height: 50px;
      max-height: 50px;
      max-width: 50px;
      min-width: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    aside .list-category button {
      padding: 8px;
      margin-bottom: 8px;
      color: var(--text-dark);
      text-transform: capitalize;
    }

    aside .list-category button:hover {
      opacity: 0.6;
      transition: 0.4s;
    }

    @media (orientation: landscape) and (min-width: 1280px) {
      aside {
        display: flex;
      }
    }
  </style>
</head>
<aside>
  <h3>categorias</h3>

  <div class="box-filter">
    <span>filter</span>
    <span class="material-symbols-outlined">tune</span>
  </div>

  <div class="list-category">
    <?php
      // URL que contém os dados JSON
      $json_url = 'https://rosystore.com.br/server/api_category.php';

      // Faz a requisição HTTP e obtém o conteúdo JSON
      $json_data = file_get_contents($json_url);

      // Decodifica o JSON em um array associativo
      $data = json_decode($json_data, true);

      // Verifica se a decodificação foi bem-sucedida e se existem categorias
      if ($data !== null && isset($data['status']) && $data['status'] === 'success' && isset($data['categories'])) {
          // Itera sobre as categorias e exibe os botões
          foreach ($data['categories'] as $category) {
              echo '<button onclick="filter(\'' . $category . '\')">' . $category . '</button>';
          }
      } else {
          echo 'Não foi possível obter as categorias.';
      }
    ?>
  </div>
</aside>