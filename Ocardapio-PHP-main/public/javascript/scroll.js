document.addEventListener('DOMContentLoaded', function() {
  // Adicionando evento de clique aos links com a classe "scroll"
  document.querySelectorAll('.scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      document.querySelectorAll('.scroll').forEach(link => {
        link.classList.remove('active');
      });

      this.classList.add('active');
      
      // Rolar suavemente até o destino usando o método scrollTo
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      let headerHeight;
      if (window.matchMedia("(orientation: portrait)").matches) {
        headerHeight = document.querySelector('#header-mobile').offsetHeight;
      } else {
        headerHeight = document.querySelector('#header').offsetHeight;
      }
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
});