<style>
  /*------------------------------------*/
  #header-mobile {
    display: none;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--background);
    min-height: 100px;
    max-height: 100px;
    position: sticky;
    height: 150px;
    z-index: 999;
    top: 0;
  }

  #header-mobile a.logo {
    min-width: 100px;
    max-width: 100px;
    min-height: 100px;
    max-height: 100px;
    background-color: transparent;
    background-image: url('../public/assets/logo.png');
    background-repeat: no-repeat;
    background-size: contain;
    user-select: none;
    border: none !important;
  }

  #header-mobile button.menu {
    min-width: 60px;
    max-width: 60px;
    min-height: 60px;
    max-height: 60px;
    background-color: transparent;
    user-select: none;
  }

  #header-mobile button.menu span {
    font-size: 2.5rem;
  }

  #header-mobile menu {
    top: 0;
    left: 0;
    width: 0;
    position: fixed;
    background-color: var(--background);
    z-index: 9999;
    height: 100vh;
    overflow: auto;
    transition: 0.4s ease;
    gap: 16px;
  }

  #header-mobile menu .close {
    min-width: 60px;
    max-width: 60px;
    min-height: 60px;
    max-height: 60px;
    background-color: transparent;
    user-select: none;
    position: absolute;
    right: 0px;
    top: 16px;
  }

  #header-mobile menu .txt-close {
    color: var(--text-dark);
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 2rem;
  }

  #header-mobile menu a {
    color: var(--text-dark);
    text-transform: uppercase;
    font-size: 1.3rem;
  }

  @media (orientation: portrait) {
    #header-mobile {
      display: flex;
    }
  }
</style>

<header id="header-mobile" class="container">
  <a class="scroll logo" href="#top"></a>

  <menu id="menu" class="container">
    <button id="menu-button-close" class="container close">
      <span class="material-symbols-outlined txt-close">restaurant_menu</span>
    </button>

    <a class="scroll active" href="#top">home</a>
    <a class="scroll" href="#services">serviços</a>
    <a class="scroll" href="#prices">plano</a>
    <a class="scroll" href="#information">informações</a>
    <a class="scroll" href="#depositions">depoimentos</a>
  </menu>
  <button id="menu-button" class="container menu">
    <span class="material-symbols-outlined">menu</span>
  </button>
</header>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");

    const menuButtonClose = document.getElementById("menu-button-close");
    menuButtonClose.addEventListener("click", function() {
      menu.style.width = "0%";
    });

    const menuButton = document.getElementById("menu-button");
    menuButton.addEventListener("click", function() {
      menu.style.width = "100%";
    });

    const links = document.querySelectorAll("#header-mobile menu a");

    links.forEach(function(link) {
      link.addEventListener("click", function() {
        menu.style.width = "0";
      });
    });
  });
</script>
