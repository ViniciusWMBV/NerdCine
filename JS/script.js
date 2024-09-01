// Lógica JavaScript para navegação no carrossel
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const leftArrow = document.querySelector('.carousel-arrow.left');
const rightArrow = document.querySelector('.carousel-arrow.right');
let position = 0;

// Evento de clique na seta esquerda
leftArrow.addEventListener('click', function() {
  position += carouselItems[0].offsetWidth + 10;
  position = Math.min(position, 0);
  carousel.style.transform = `translateX(${position}px)`;
});

// Evento de clique na seta direita
rightArrow.addEventListener('click', function() {
  position -= carouselItems[0].offsetWidth + 10;
  const minPosition = -(carouselItems.length - 1) * (carouselItems[0].offsetWidth + 10);
  position = Math.max(position, minPosition);
  carousel.style.transform = `translateX(${position}px)`;
});

// Ajusta o tamanho do carrossel ao redimensionar a janela
window.addEventListener('resize', function() {
  position = 0;
  carousel.style.transform = `translateX(${position}px)`;
});

function redirectPage(url) {
  window.location.href = url;
}


window.addEventListener('load', function() {
  if (window.innerWidth > 768) { // Defina a largura em que deseja exibir a mensagem (768 é um exemplo para telas maiores que dispositivos móveis)
      var container = document.getElementById('filmes');
      container.style.display = 'flex';
  } else {
      var container = document.getElementById('filmes');
      container.style.display = 'none';
  }
});
