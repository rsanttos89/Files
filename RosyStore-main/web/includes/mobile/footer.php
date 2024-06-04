<head>
  <style>
    #footer-mobile {
      display: none;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      z-index: 100;
      bottom: 0;
      left: 0;
    }
    #footer-mobile a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: var(--text-light);
      min-height: 50px;
      max-height: 50px;
      min-width: 50px;
    }
    #footer-mobile a:active {
      background-color: var(--card-hover);
    }
    #footer-mobile span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1.8rem;
    }
    @media (orientation: portrait) {
      #footer-mobile {
        display: flex;
      }
    }
  </style>
</head>
<footer id="footer-mobile" class="gradient">
  <a href="/" rel="noopener noreferrer" class="home">
    <span class="material-symbols-outlined">home</span>
  </a>

  <a href="../../products/search" rel="noopener noreferrer" class="search">
    <span class="material-symbols-outlined">search</span>
  </a>

  <a href="../../cart/checkout" rel="noopener noreferrer" class="cart">
    <span class="material-symbols-outlined">local_mall</span>
  </a>

  <a href="../../products/favorite" rel="noopener noreferrer" class="favorite">
    <span class="material-symbols-outlined">bookmark</span>
  </a>

  <a href="../../chat/helpdesk" rel="noopener noreferrer" class="helpdesk">
    <span class="material-symbols-outlined">chat</span>
  </a>
</footer>