<head>
  <style>
    #footer-mobile {
      display: none;
      max-height: 50px;
      min-height: 50px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background-color: var(--button);
      position: fixed;
      bottom: 0;
      left: 0;
    }

    #footer-mobile button {
      width: 100%;
      max-height: 50px;
      min-width: 50px;
      min-height: 50px;
      color: var(--text-dark);
      align-items: center;
      justify-content: center;
      display: flex;
    }

    #footer-mobile button:hover,
    #footer-mobile button:active {
      background-color: var(--card-hover);
    }

    #footer-mobile .material-symbols-outlined {
      font-size: 1.7rem;
    }

    @media (orientation: portrait) {
      #footer-mobile {
        display: flex;
      }
    }
  </style>
</head>
<footer id="footer-mobile">
  <button id="btn-home" class="material-symbols-outlined">home</button>
  <button id="btn-search" class="material-symbols-outlined">search</button>
  <button id="btn-cart" class="material-symbols-outlined">local_mall</button>
  <button id="btn-favorite" class="material-symbols-outlined">favorite</button>
  <button id="btn-user" class="material-symbols-outlined">account_circle</button>
</footer>

<script>
  /** -------------------------- FOOTER MOBILE ------------------------------------------- */
  document.getElementById("btn-home-header").addEventListener("click", function() {
    window.location.href = "../../";
  });

  document.getElementById("btn-search-header").addEventListener("click", function() {
    window.location.href = "../../products/search";
  });

  document.getElementById("btn-cart-header").addEventListener("click", function() {
    window.location.href = "../../cart/checkout";
  });

  document.getElementById("btn-favorite-header").addEventListener("click", function() {
    window.location.href = "../../products/favorite";
  });

  /** -------------------------- FOOTER ------------------------------------------- */
  document.getElementById("btn-home").addEventListener("click", function() {
    window.location.href = "../../";
  });

  document.getElementById("btn-search").addEventListener("click", function() {
    window.location.href = "../../products/search";
  });

  document.getElementById("btn-cart").addEventListener("click", function() {
    window.location.href = "../../cart/checkout";
  });

  document.getElementById("btn-favorite").addEventListener("click", function() {
    window.location.href = "../../products/favorite";
  });

  document.getElementById("btn-user").addEventListener("click", function() {
    window.location.href = "../../profile/user";
  });
</script>