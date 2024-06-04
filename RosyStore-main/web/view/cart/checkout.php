<?php $title = "carrinho";?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="..." />
  <meta name="theme-color" content="#fff" />
  <link rel="shortcut icon" href="../../public/assets/favicon.ico" type="image/x-icon" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  <link rel="stylesheet" href="../../public/styles/cart.css" />
  <meta name="robots" content="noindex">
  <title>Carrinho</title>
</head>
<body>
  <?php include_once './includes/header.php';?>
  
  <main>
    <?php include_once './includes/tablinhe.php';?>

    <div id="carrinho-container">
      <!-- CONTENT CART -->
    </div>

    <section id="box-total-mobile">
      <div class="box-txt">
        <span class="txt">Total</span>
        <span id="total-cart">R$0,00</span>
      </div>
      <button id="finish" class="gradient">finalizar pedido</button>
    </section>
  </main>

  <?php include_once './includes/mobile/footer.php';?>

  <!-- SCRIPT -->
  <script>
    function incrementValue(itemId) {
      updateQuantity(itemId, 1);
    }

    function decrementValue(itemId) {
      updateQuantity(itemId, -1);
    }

    function updateQuantity(itemId, change) {
      // Obtendo o carrinho do localStorage
      let cart = JSON.parse(localStorage.getItem('carrinho')) || [];

      // Encontrando o item com o itemId especificado no carrinho
      const itemIndex = cart.findIndex(cartItem => cartItem.id == itemId);

      // Se o item for encontrado, atualiza a quantidade
      if (itemIndex !== -1) {
        const novaQuantidade = cart[itemIndex].quantity + change;

        // Verifica se a nova quantidade é maior ou igual a 1
        if (novaQuantidade >= 1) {
          // Atualiza a quantidade no carrinho
          cart[itemIndex].quantity = novaQuantidade;

          // Atualiza o valor no localStorage
          localStorage.setItem('carrinho', JSON.stringify(cart));

          // Atualiza a interface do usuário
          renderizarCarrinho();
        } else {
          alert('A quantidade mínima permitida é 1.');
        }
      } else {
        alert('Item não encontrado no carrinho.');
      }

      calcularTotal();
      updateCartQuantity();
    }

    /** -------------------------------------------------------------------------------- */
    function renderizarCarrinho() {
      const carrinhoContainer = document.getElementById('carrinho-container');
      carrinhoContainer.innerHTML = '';

      const renderizarItemNoCarrinho = (item) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('box-cart', 'item-carrinho', `item-id-${item.id}`);

        itemElement.innerHTML = `
          <div class="img">
            <img src="${item.urlImg}" alt="${item.nameProduct}">
          </div>

          <div class="big-box-txt">
            <div class="box-txt">
              <div class="txt">
                <span>cód.:<span id="itemId">${item.codeId}</span></span>
                <h2>${item.nameProduct}</h2>
                <span>tam.:${item.size}</span>
              </div>

              <button onclick="deleteItem(${item.id})" class="material-symbols-outlined">delete_sweep</button>
            </div>

            <div class="box-txt" style="align-items: center; flex-direction: row-reverse;">
              <div class="txt" style="width: auto;">
                <h2 id="price">${(parseFloat(item.price.replace('R$', '').replace(',', '.')) * item.quantity).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}</h2>
              </div>

              <div class="box-input-amount">
                <button class="material-symbols-outlined" onclick="decrementValue(${item.id})" style="font-size: 1rem;">arrow_back_ios</button>
                <input type="text" name="amount" value="${item.quantity}" title="quantidade">
                <button class="material-symbols-outlined" onclick="incrementValue(${item.id})" style="font-size: 1rem;">arrow_forward_ios</button>
              </div>
            </div>
          </div>
        `;

        carrinhoContainer.appendChild(itemElement);
      };

      if (localStorage.getItem('carrinho')) {
        try {
          const carrinhoLista = JSON.parse(localStorage.getItem('carrinho'));

          if (Array.isArray(carrinhoLista)) {
            carrinhoLista.forEach((item) => {
              if (typeof item === 'object') {
                renderizarItemNoCarrinho(item);
              } else {
                console.warn('Item do carrinho não é um objeto:', item);
              }
            });
          } else {
            console.error('O valor armazenado no carrinho não é uma lista/array:', carrinhoLista);
          }
        } catch (error) {
          console.error('Erro ao analisar os dados do carrinho:', error);
        }
      } else {
        const carrinhoVazio = document.createElement('p');
        carrinhoVazio.textContent = 'Seu carrinho está vazio.';
        carrinhoContainer.appendChild(carrinhoVazio);
      }
    }

    /** -------------------------------------------------------------------------------- */
    function deleteItem(itemId) {
      // Exibe um alerta para confirmar a exclusão
      let confirmation = confirm('Tem certeza que deseja excluir este item do carrinho?');

      // Se o usuário confirmar, realiza a exclusão
      if (confirmation) {
        // Obtendo o carrinho do localStorage
        let cart = JSON.parse(localStorage.getItem('carrinho')) || [];

        // Encontrando o índice do item com o itemId especificado no carrinho
        const itemIndex = cart.findIndex(cartItem => cartItem.id == itemId);

        // Se o item for encontrado, remove-o do carrinho
        if (itemIndex !== -1) {
          cart.splice(itemIndex, 1);

          // Salvando o carrinho atualizado de volta no localStorage
          localStorage.setItem('carrinho', JSON.stringify(cart));

          // Chama a função para renderizar o carrinho sem recarregar a página
          renderizarCarrinho();
        } else {
          alert('Item não encontrado no carrinho.');
        }
      } else {
        alert('A exclusão foi cancelada.');
      }

      calcularTotal();
      updateCartQuantity();
    }
    /** ------------------------------------------------------------------------------------------ */
    function calcularTotal() {
      // Obtendo o carrinho do localStorage
      let cart = JSON.parse(localStorage.getItem('carrinho')) || [];

      // Calcula o total somando o preço de cada item multiplicado pela quantidade
      const total = cart.reduce((acc, item) => {
        const precoItem = parseFloat(item.price.replace('R$', '').replace(',', '.'));
        return acc + precoItem * item.quantity;
      }, 0);

      // Atualiza o valor total na interface do usuário
      document.getElementById('total-cart').textContent = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    }

    /**---------------------------------------------------------------------------------------------- */
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

    renderizarCarrinho();
    calcularTotal();

  </script>

  <!-- WHATSAPP -->
  <script>
    function sendCartToWhatsApp() {
        let cartData = getCartData();
        let formattedMessage = formatCartForWhatsApp(cartData);

        // Substitua o número de telefone abaixo pelo número para o qual deseja enviar a mensagem
        let phoneNumber = '+5599984680418';

        // Use a API de redirecionamento do WhatsApp para abrir o aplicativo e preencher a mensagem
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`, '_blank');
    }

    function formatCartForWhatsApp(cartData) {
        let formattedMessage = 'Pedido recebido\nEm alguns instantes\nentaremos em contato\n\nItens no Carrinho:\n\n';

        if (cartData.length > 0) {
            cartData.forEach((item, index) => {
                formattedMessage += `${index + 1}. ${item.nameProduct}\n`;
                formattedMessage += `   Código do Produto: ${item.codeId}\n`;
                formattedMessage += `   Quantidade: ${item.quantity}, Tamanho: ${item.size}\n`;
                formattedMessage += `   Preço: ${item.price}, Subtotal: ${(parseFloat(item.price.replace('R$', '').replace(',', '.')) * item.quantity).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}\n`;
                formattedMessage += '   -----------------------------------------------\n\n'; // Linha horizontal
                
            });

            formattedMessage += `Total: ${getTotalCartPrice(cartData)}`;
        } else {
            formattedMessage += 'Seu carrinho está vazio.';
        }

        return formattedMessage;
    }

    // Função para obter dados do carrinho
    function getCartData() {
        // Substitua esta lógica pela forma como você obtém os dados do carrinho (provavelmente do localStorage)
        let cartData = [];
        cartData = JSON.parse(localStorage.getItem('carrinho')) || [];
        return cartData;
    }

    // Função para calcular o total do carrinho
    function getTotalCartPrice(cartData) {
        const total = cartData.reduce((acc, item) => {
            const itemPrice = parseFloat(item.price.replace('R$', '').replace(',', '.')) * item.quantity;
            return acc + itemPrice;
        }, 0);

        return `R$${total.toFixed(2)}`;
    }

    // Chame a função quando o botão com id "finish" for clicado
    document.getElementById('finish').addEventListener('click', function () {
        sendCartToWhatsApp();
    });

  </script>
</body>
</html>