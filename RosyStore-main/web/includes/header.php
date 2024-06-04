<?php
  $requestUri = filter_input(INPUT_SERVER, 'REQUEST_URI');
  $queryStringStart = strpos($requestUri, '?');
  
  if ($queryStringStart !== false) {
      $requestUri = substr($requestUri, 0, $queryStringStart);
  }

  $requestUriWithoutLeadingSlash = substr($requestUri, 1);
  $urlParts = explode('/', $requestUriWithoutLeadingSlash);

  $paramValueZero = $urlParts[0];
  $paramValueOne = $urlParts[1];
  $paramValueTwo = $urlParts[2];
?>

<style>
  #header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--background);
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
  }
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 99;
    background-color: var(--background);
    justify-content: space-between;
    padding: 0px 16px;
    min-height: 60px;
    max-height: 60px;
    max-width: 1280px;
  }
  #container-header {
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    position: fixed;
    z-index: 9;
    top: 0;
  }
  #container-header .sub-header {
    min-height: 60px;
    max-height: 60px;
    max-width: 1260px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }
  header .container-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  header .container-icons button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    min-height: 60px;
    max-height: 60px;
    width: auto;
  }

  header .container-icons:nth-child(1) {
    justify-content: flex-start;
  }

  header .container-icons:nth-child(3) {
    justify-content: flex-end;
  }

  header .container-icons a {
    user-select: none;
    min-height: 60px;
    max-height: 60px;
    width: auto;
    font-weight: bolder;
    color: var(--text-dark);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  header .container-icons .button-cart {
    user-select: none;
    min-height: 60px;
    max-height: 60px;
    width: auto;
    font-weight: bolder;
    position: relative;
    color: var(--text-dark);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  #cart-quantity {
    width: auto;
    border-radius: 100%;
    bottom: 18px;
    font-size: 0.9rem;
    position: absolute;
  }

  header .title {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  header .title a {
    width: auto;
    font-size: 1.8rem;
    text-wrap: nowrap;
    font-weight: bolder;
    color: var(--text-dark);
    text-transform: uppercase;
    font-family: 'Rajdhani', sans-serif;
    text-align: center;
  }
  .button-cart {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .button-cart span {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (orientation: portrait) {
    #favorite {
      display: none;
    }
  }

  @media (orientation: landscape) and (min-width: 1280px) {
    header {
      padding: 0px;
    }
  }
</style>

<section id="header">
  <header>
    <div class="container-icons">
      <button id="sort" class="material-symbols-outlined" style="font-size: 2.1rem; justify-content: flex-start;">sort</button>
      <button id="arrow-back" class="material-symbols-outlined" onclick="window.history.back();" style="font-size: 2.1rem;">arrow_back</button>
    </div>

    <div class="title">
      <?php
        echo '<a href="/" rel="noopener noreferrer"> rosy store</a>';
      ?>
    </div>

    <div class="container-icons">
      <a id="favorite" class="material-symbols-outlined" href="../../products/favorite" rel="noopener noreferrer" style="font-size: 2.1rem; margin-right: 16px">bookmark</a>

      <a class="button-cart" href="../../cart/checkout" rel="noopener noreferrer">
        <span class="material-symbols-outlined" style="font-size: 2.2rem;">shopping_bag</span>
        <span id="cart-quantity">0</span>
      </a>
    </div>
  </header>

  <div id="container-header">
    <div class="sub-header"></div>
  </div>
</section>

<script>
  // Função para obter e atualizar a quantidade do carrinho
  function updateCartQuantity() {
      const cart = JSON.parse(localStorage.getItem('carrinho')) || [];
      const cartQuantityElement = document.getElementById('cart-quantity');
      const cartQuantityElementDesk = document.getElementById('cart-quantityDesk');

      // Somar a quantidade de todos os itens no carrinho
      const totalQuantity = cart.reduce((total, item) => total + (item.quantity || 0), 0);

      cartQuantityElement.textContent = totalQuantity;
  }

  // Função para ser chamada no pageshow
  function onPageShow() {
      // Chama a função para exibir a quantidade do carrinho
      updateCartQuantity();
  }

  // Adicionar um ouvinte de evento para o evento DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
      // Chamar a função para exibir a quantidade do carrinho ao carregar completamente a página
      updateCartQuantity();
  });

  // Adicionar um ouvinte de evento para o evento pageshow
  window.addEventListener('pageshow', function(event) {
      // Verifica se o evento persistiu (se a página foi revisitada)
      if (event.persisted) {
          // Chama a função para exibir a quantidade do carrinho no pageshow
          onPageShow();
      }
  });
</script>