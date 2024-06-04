<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Aproveite nosso cardápio! Escolha o que desejar e recebe em sua casa de forma rápida e segura." />
  <link rel="stylesheet" href="/public/styles/business.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <title>Cardápio - Demostração como vai funcionar o seu sistema</title>

  <meta name="theme-color" content="#e22b40cb" />
  <link rel="apple-touch-icon" href="/public/assets/icons-pwa/logo192.png" />
  <link rel="manifest" href="/manifest.json" />
</head>
<body>
  <header class="container">
    <div id="banner" class="container"></div>

    <div class="row-mobile container">
      <span id="logo"></span>

      <div class="container" id="card-info">
        <h1>Nome da empresa</h1>
        <div class="row" style="margin-bottom: 4px;">
          <span class="material-symbols-outlined" style="font-size: 1rem;">schedule</span>
          <span>45 a 60 min</span>
        </div>
      </div>
    </div>

    <nav id="tabs" class="container">
      <menu>
        <button class="active-button">Burgers</button>
        <button>Pizzas</button>
        <button>Churrascos</button>
        <button>Steaks</button>
        <button>Bebinas</button>
        <button>Sobremesas</button>
      </menu>
    </nav>
  </header>

  <main id="main" class="container">
    <section class="box">
      <button class="box-product container">
        <span class="imagens">imp</span>

        <div class="container text">
          <span class="title">127 - Hambúrger</span>
          <span class="subtitle">Hambúrguer com cebola, tomate e alface</span>
          <span class="price">R$24,90</span>
        </div>
      </button>

      <button class="box-product container">
        <span class="imagens">imp</span>

        <div class="container text">
          <span class="title">127 - Hambúrger</span>
          <span class="subtitle">Hambúrguer com cebola, tomate e alface</span>
          <span class="price">R$24,90</span>
        </div>
      </button>

      <button class="box-product container">
        <span class="imagens">imp</span>

        <div class="container text">
          <span class="title">127 - Hambúrger</span>
          <span class="subtitle">Hambúrguer com cebola, tomate e alface, tomate e alface</span>
          <span class="price">R$24,90</span>
        </div>
      </button>

      <button class="box-product container">
        <span class="imagens">imp</span>

        <div class="container text">
          <span class="title">127 - Hambúrger</span>
          <span class="subtitle">Hambúrguer com cebola, tomate e alface</span>
          <span class="price">R$24,90</span>
        </div>
      </button>

      <button class="box-product container">
        <span class="imagens">imp</span>

        <div class="container text">
          <span class="title">127 - Hambúrger</span>
          <span class="subtitle">Hambúrguer com cebola, tomate e alface</span>
          <span class="price">R$24,90</span>
        </div>
      </button>

      <button class="box-product container">
        <span class="imagens">imp</span>

        <div class="container text">
          <span class="title">127 - Hambúrger</span>
          <span class="subtitle">Hambúrguer com cebola, tomate e alface</span>
          <span class="price">R$24,90</span>
        </div>
      </button>
    </section>
  </main>

  <script>
    /** -------------------------- SERVICE WORKER ------------------------------------------- */
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('./service_worker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
        });
      });
    }
  </script>

  <script>
    // Seleciona todos os botões dentro do elemento <menu>
    const buttons = document.querySelectorAll('menu button');

    // Adiciona um ouvinte de evento de clique a cada botão
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove a classe 'active-button' de todos os botões
        buttons.forEach(btn => {
          btn.classList.remove('active-button');
        });
        // Adiciona a classe 'active-button' apenas ao botão clicado
        button.classList.add('active-button');
      });
    });
  </script>

  <script>
    function shareFunction() {
      // Verifica se é um dispositivo móvel
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Se for, abre a função de compartilhamento nativa do dispositivo
        navigator.share({
          title: 'Título do compartilhamento',
          text: 'Texto do compartilhamento',
          url: 'https://example.com',
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
      } else {
        // Se não for, mostra um aviso de que o link foi copiado
        alert('Link copiado! Agora é só compartilhar.');
        const dummyInput = document.createElement('input');
        document.body.appendChild(dummyInput);
        dummyInput.value = 'https://example.com';
        dummyInput.select();
        document.execCommand('copy');
        document.body.removeChild(dummyInput);
      }
    }
  </script>

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-2Z3T770BQ4"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-2Z3T770BQ4');
  </script>
</body>
</html>