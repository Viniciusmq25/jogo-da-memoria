const waterfall = document.querySelector('.waterfall');
const images = [
    '../img/image0.jpg',
    '../img/image (2).jpg',
    '../img/image (3).jpg',
    '../img/image (4).jpg',
    '../img/image (5).jpg',
    '../img/image (6).jpg',
    '../img/image (7).jpg',
    '../img/image (8).jpg',
    '../img/image (9).jpg',
    '../img/image (10).jpg',
    '../img/image (11).jpg',
    '../img/image (12).jpg',
    '../img/image (13).jpg',
    '../img/image (14).jpg',
    '../img/image.jpg',
    // Adicione até 15 imagens aqui
];

function createImageElement(src) {
  const img = document.createElement('img');
  img.src = src;
  img.style.left = `${Math.random() * 100}vw`;
  img.style.animationDuration = `${Math.random() + 10}s`; // entre 5s e 10s
  img.style.animationDelay = `${Math.random() * 10}s`;
  return img;
}

function startWaterfall() {
  images.forEach(src => {
      const img = createImageElement(src);
      waterfall.appendChild(img);

      // Reinicia o ciclo quando a animação termina
      img.addEventListener('animationend', () => {
          img.remove();
          const newImg = createImageElement(src);
          waterfall.appendChild(newImg);
      });
  });
}

startWaterfall();