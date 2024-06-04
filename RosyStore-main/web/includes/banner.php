<head>
  <style>
    #banner {
      margin-top: 65px;
      padding: 0px 16px;
      border-radius: 4px;
      overflow: hidden;
      align-items: center;
      justify-content: center;
    }

    #banner .box-banner {
      display: flex;
      max-width: 1280px;
      flex-direction: row;
      overflow-x: auto;
      scroll-snap-type: x mandatory; /* Adiciona rolagem horizontal e obriga o alinhamento */
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
      border-radius: 2px;
    }

    #banner .img {
      min-height: 500px;
      max-height: 500px;
      width: 100%; /* Ocupa toda a largura disponível */
      flex-shrink: 0; /* Evita que as imagens sejam reduzidas */
      border-radius: 4px;
      scroll-snap-align: start; /* Alinha o início de cada imagem */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #banner .line {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      max-height: 65px;
      min-height: 65px;
      max-width: 1280px;
    }

    #banner .line hr {
      border: solid 1px var(--border);
      position: absolute;
      width: 100%; /* Ocupa toda a largura disponível */
    }

    #banner .line .text {
      width: auto;
      text-transform: uppercase;
      background-color: var(--background);
      padding: 0px 16px;
    }

    @media (orientation: portrait) {
      #banner .img {
        min-height: 225px;
        max-height: 225px;
      }
    }

    #banner .box-banner a {
      font-weight: 500;
      color: var(--text-light);
      font-family: 'Rajdhani', sans-serif;
      text-transform: uppercase;
      font-size: 3.5rem;
    }
    #img-one, #img-two, #img-three {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0.8;
    }
    #img-one {
      background-image: url('../public/assets/banner/brinco.webp');
    }
    #img-two {
      background-image: url('../public/assets/banner/anel.webp');
    }
    #img-three {
      background-image: url('../public/assets/banner/brinco.webp');
    }
  </style>
</head>

<section id="banner">
  <div class="box-banner">
    <a href="/" rel="noopener noreferrer" class="img" id="img-one" aria-label="imagem para mostar catálogo de brincos"></a>
    <a href="/" rel="noopener noreferrer" class="img" id="img-two" aria-label="imagem para mostar catálogo de anéis"></a>
    <a href="/" rel="noopener noreferrer" class="img" id="img-three" aria-label="imagem para mostar catálogo de brincos"></a>
  </div>
  <span class="line">
    <hr />
    <span class="text">catálogo</span>
  </span>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const boxBanner = document.querySelector('#banner .box-banner');
    let scrollInterval;

    function scrollBanner() {
      let currentIndex = Math.round(boxBanner.scrollLeft / boxBanner.clientWidth);
      let nextIndex = (currentIndex + 1) % boxBanner.children.length;

      if (nextIndex === 0) {
        // Se for o último item, retorna ao primeiro
        boxBanner.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      } else {
        // Caso contrário, rola para o próximo item normalmente
        boxBanner.scrollTo({
          left: nextIndex * boxBanner.clientWidth,
          behavior: 'smooth'
        });
      }
    }

    function startScroll() {
      scrollInterval = setInterval(scrollBanner, 5000);
    }

    function pauseScroll() {
      clearInterval(scrollInterval);
    }

    // Pausa a rolagem quando o mouse passa sobre o banner
    boxBanner.addEventListener('mouseenter', pauseScroll);

    // Retoma a rolagem quando o mouse deixa o banner
    boxBanner.addEventListener('mouseleave', startScroll);

    // Pausa a rolagem automática quando o usuário faz uma rolagem manual
    boxBanner.addEventListener('scroll', function () {
      pauseScroll();
      startScroll();
    });

    // Retoma a rolagem automática quando a página é carregada
    window.addEventListener('load', startScroll);
  });
</script>