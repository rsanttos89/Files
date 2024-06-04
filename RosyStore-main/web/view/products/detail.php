<?php 
  $title = "detalhes";

  $requestUri = filter_input(INPUT_SERVER, 'REQUEST_URI');
  $queryStringStart = strpos($requestUri, '?');
  
  if ($queryStringStart !== false) {
      $requestUri = substr($requestUri, 0, $queryStringStart);
  }

  $requestUriWithoutLeadingSlash = substr($requestUri, 1);
  $urlParts = explode('/', $requestUriWithoutLeadingSlash);

  // Check if $urlParts[2] is not set or is empty
  if (!isset($urlParts[2]) || empty($urlParts[2])) {
      // Redirect to 404 page
      header('Location: /view/404');
      exit();
  }

  $paramValueZero = $urlParts[0];
  $paramValueOne = $urlParts[1];
  $paramValueTwo = $urlParts[2];
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="..." />
  <meta name="theme-color" content="#fff" />
  <link rel="shortcut icon" href="/public/assets/favicon.ico" type="image/x-icon" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  <link rel="stylesheet" href="/public/styles/detail.css" />
  <title>Detail</title>
</head>
<body>
  <?php include_once './includes/header.php';?>

  <div class="links">
    <span><?php echo $paramValueZero ?></span>
    <span>&#187;</span>
    <span><?php echo $paramValueOne ?></span>
    <span>&#187;</span>
    <span><?php echo $paramValueTwo ?></span>
  </div>

  
  <main data-id=1>
    <section id="left">
      <div class="background-img">
        <img src="/public/assets/products/brinco-argola.webp" alt="products" />
      </div>

      <div class="box-img">
        <button>
          <img id="url-img" src="/public/assets/products/brinco-argola.webp" alt="products" />
        </button>

        <button>
          <img src="/public/assets/products/brinco-argola.webp" alt="products" />
        </button>

        <button>
          <img src="/public/assets/products/brinco-argola.webp" alt="products" />
        </button>

        <button>
          <img src="/public/assets/products/brinco-argola.webp" alt="products" />
        </button>
      </div>
    </section>

    <section id="right">
      <div class="box">
        <div class="top">
          <span style="text-transform: uppercase; font-size: 0.9rem">Cód.: <span id="code-id">1</span></span>
          <h2><span id="name-product">Snake Ring</span> - <span id="price">9.90</span></h2>
          <span>1,6mi vizualizações</span>
        </div>

        <div class="center">
          <div class="box-size">
            <button class="btn-size">10</button>
            <button class="btn-size">11</button>
            <button class="btn-size">12</button>
            <button class="btn-size">13</button>
            <button class="btn-size">14</button>
            <button class="btn-size">15</button>
            <button class="btn-size">16</button>
          </div>

          <button class="btn-add gradient">add carrinho</button>

          <a href="https://chat.whatsapp.com/J8H1sWVo90pD4JJiVbSEwB" target="_blank" rel="noopener noreferrer">grupo whatsapp</a>
        </div>

        <div class="bottom">
          <h3>Descrição</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores similique iusto eum consectetur alias iste, nesciunt cumque eos? Optio nisi velit animi porro quidem nostrum minus eveniet quod quaerat.</p>
        </div>
      </div>
    </section>

    <div class="bottom-mobile">
      <h3>Descrição</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores similique iusto eum consectetur alias iste, nesciunt cumque eos? Optio nisi velit animi porro quidem nostrum minus eveniet quod quaerat.</p>
    </div>
  </main>

  <section id="plus">
    <h3>Os mais vendidos</h3>
    <div class="products-list">
      <a href="./products/detail/1" rel="noopener noreferrer">
        <div class="box-txt">
          <h2>nome do produto</h2>
        </div>
        <img src="/public/assets/products/anel-ouro.webp" alt="products" />
        <div class="box-txt">
          <p>R$869,90</p>
        </div>
      </a>

      <a href="./products/detail/1" rel="noopener noreferrer">
        <div class="box-txt">
          <h2>nome do produto</h2>
        </div>
        <img src="/public/assets/products/anel-ouro.webp" alt="products" />
        <div class="box-txt">
          <p>R$869,90</p>
        </div>
      </a>

      <a href="./products/detail/1" rel="noopener noreferrer">
        <div class="box-txt">
          <h2>nome do produto</h2>
        </div>
        <img src="/public/assets/products/anel-ouro.webp" alt="products" />
        <div class="box-txt">
          <p>R$869,90</p>
        </div>
      </a>

      <a href="./products/detail/1" rel="noopener noreferrer">
        <div class="box-txt">
          <h2>nome do produto</h2>
        </div>
        <img src="/public/assets/products/anel-ouro.webp" alt="products" />
        <div class="box-txt">
          <p>R$869,90</p>
        </div>
      </a>

      <a href="./products/detail/1" rel="noopener noreferrer">
        <div class="box-txt">
          <h2>nome do produto</h2>
        </div>
        <img src="/public/assets/products/anel-ouro.webp" alt="products" />
        <div class="box-txt">
          <p>R$869,90</p>
        </div>
      </a>

      <a href="./products/detail/1" rel="noopener noreferrer">
        <div class="box-txt">
          <h2>nome do produto</h2>
        </div>
        <img src="/public/assets/products/anel-ouro.webp" alt="products" />
        <div class="box-txt">
          <p>R$869,91</p>
        </div>
      </a>

      <a href="./products/detail/1" rel="noopener noreferrer">
        <div class="box-txt">
          <h2>nome do produto</h2>
        </div>
        <img src="/public/assets/products/anel-ouro.webp" alt="products" />
        <div class="box-txt">
          <p>R$869,90</p>
        </div>
      </a>

      <a href="./products/detail/1" rel="noopener noreferrer">
        <div class="box-txt">
          <h2>nome do produto</h2>
        </div>
        <img src="/public/assets/products/anel-ouro.webp" alt="products" />
        <div class="box-txt">
          <p>R$869,90</p>
        </div>
      </a>
    </div>
  </section>

<script>
  document.addEventListener("DOMContentLoaded", function () {
      const btnSizes = document.querySelectorAll('.btn-size');
      let selectedSize = null;

      btnSizes.forEach(function (btn) {
          btn.addEventListener('click', function () {
              if (selectedSize) {
                  selectedSize.classList.remove('selected');
              }

              btn.classList.add('selected');
              selectedSize = btn;
          });
      });

      const btnAdd = document.querySelector('.btn-add');
      btnAdd.addEventListener('click', function () {
          if (selectedSize) {
              const itemId = document.querySelector('main').getAttribute('data-id');
              const selectedSizeValue = selectedSize.textContent;
              const urlImg = document.getElementById('url-img').getAttribute('src');
              const codeId = document.getElementById('code-id').textContent;
              const nameProduct = document.getElementById('name-product').textContent;
              const price = document.getElementById('price').textContent;

              const id = itemId + selectedSizeValue;

              // Obter o carrinho do localStorage
              const cart = JSON.parse(localStorage.getItem('carrinho')) || [];

              // Verificar se um item com o mesmo itemId e tamanho já está no carrinho
              const existingItemIndex = cart.findIndex(item => item.id === id && item.size === selectedSizeValue);

              if (existingItemIndex !== -1) {
                  // Se existir, incrementar a quantidade ou realizar outra ação desejada
                  cart[existingItemIndex].quantity += 1;
              } else {
                  // Se não existir, adicionar como um novo item
                  cart.push({
                      id,
                      size: selectedSizeValue,
                      quantity: 1,
                      urlImg,
                      codeId,
                      nameProduct,
                      price
                  });
              }

              // Salvar o carrinho atualizado de volta no localStorage
              localStorage.setItem('carrinho', JSON.stringify(cart));

              // Atualizar a quantidade no carrinho
              updateCartQuantity();
          } else {
              alert('Por favor, selecione um tamanho antes de adicionar ao carrinho.');
          }
      });

      // Função para obter e atualizar a quantidade do carrinho
      function updateCartQuantity() {
          const cart = JSON.parse(localStorage.getItem('carrinho')) || [];
          const cartQuantityElement = document.getElementById('cart-quantity');
          const cartQuantityElementDesk = document.getElementById('cart-quantityDesk');

          // Somar a quantidade de todos os itens no carrinho
          const totalQuantity = cart.reduce((total, item) => total + (item.quantity || 0), 0);

          cartQuantityElement.textContent = totalQuantity;
          // cartQuantityElementDesk.textContent = totalQuantity;
      }

      // Chamar a função para exibir a quantidade do carrinho ao carregar a página
      updateCartQuantity();
  });
</script>
</body>
</html>
