<style>
  /*------------------------------------*/
  #header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--background);
    align-items: center;
    position: sticky;
    height: 150px;
    z-index: 999;
    top: 0;
  }

  #header .logo {
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

  #header menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;
    gap: 16px;
  }

  #header a {
    color: #000;
    font-weight: bold;
    font-family: 'Rajdhani', sans-serif;
    text-transform: uppercase;
    font-size: 1.2rem;
  }

  #header button {
    color: var(--text-dark);
    font-weight: bold;
    text-transform: uppercase;
    background-color: transparent;
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.140rem;
  }

  @media (orientation: portrait) {
    #header {
      display: none;
    }
  }
  @media (max-width: 1080px) {
    #header menu {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
</style>

<section id="header">
  <header class="container">
    <menu>
      <a class="scroll logo" href="#top"></a>
      <a class="scroll" href="#services">serviços</a>
      <a class="scroll" href="#prices">plano</a>
      <a class="scroll" href="#information">informações</a>
      <a class="scroll" href="#depositions">depoimentos</a>
    </menu>
  </header>
</section>