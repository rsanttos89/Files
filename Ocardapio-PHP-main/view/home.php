<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="..." />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link rel="shortcut icon" href="/public/assets/favicon.ico" type="image/x-icon" />
  <link rel="stylesheet" href="/public/styles/home.css" />
  <script src="/public/javascript/scroll.js" defer></script>
  <title>Ocardápio</title>
</head>
<body>
  <span id="top"></span>
  <?php include_once './includes/header.php' ?>
  <?php include './includes/header-mobile.php' ?>

  <section id="banner">
    <div id="box" class="container">
      <div class="container left">
        <h1>Escolha o<br />app <span class="color-span">Ocardápio.</span></h1>
        <h2>E aproveite ao máximo nosso cardápio online! Ofereça um serviço ágil e seguro aos seus clientes, garantindo satisfação em cada pedido.</h2>

        <div class="box-btns container no-social">
          <a class="button container" href="/business" style="padding: 8px 32px;">Demostração</a>
          <a 
            href="https://play.google.com/store/apps/dev?id=8255759121811254778" 
            style="color: #000; padding-right: 32px;"
            target="_blank" 
            rel="noopener noreferrer"
            class="button-google"
          >
            <span class="material-symbols-outlined icon-phone container">adb</span>
            <span>Baixa agora</span>
          </a>
        </div>

        <div class="box-btns container social">
          <button class="container">a</button>
          <button class="container">f</button>
          <button class="container">f</button>
        </div>
      </div>

      <div class="container right">
        <img src="/public/assets/burguer.png" alt="burguer" style="z-index: 2;" />
      </div>
    </div>

    <a class="scroll services" href="#services">
      <span class="material-symbols-outlined">mediation</span>
    </a>
  </section>

  <section id="services">
    <div class="container sections">
      <h3>serviços</h3>
      <h4>Como são nossos serviços?</h4>

      <div class="ctn-services">
        <div class="container box">
          <img src="/public/assets/icone-pedido.svg" alt="icone pedido" />
          <div class="container text">
            <h4>Fácil de pedir</h4>
            <p>Você só precisa de alguns passos para pedir sua comida.</p>
          </div>
        </div>

        <div class="container box">
          <img src="/public/assets/icone-delivery.svg" alt="delivery" />
          <div class="container text">
            <h4>Entrega rápida</h4>
            <p>Nossa entrega é sempre pontual, rápida e segura.</p>
          </div>
        </div>

        <div class="container box">
          <img src="/public/assets/icone-qualidade.svg" alt="icone qualidade" />
          <div class="container text">
            <h4>Melhor qualidade</h4>
            <p>Não só a rapidez na entrega, a qualidade também é o nosso forte.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <main id="prices">
    <div class="price_table" class="container">
      <h3>Planos</h3>
      <h4>Como são nossos serviços?</h4>
    </div>
  </main>

  <section id="information">
    <div class="container">
      <h1>reservations</h1>
    </div>
  </section>

  <section id="depositions">
    <div class="container">
      <h1>depositions</h1>
    </div>
  </section>

  <footer>
    <div class="container">
      <span>footer</span>
    </div>
  </footer>

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