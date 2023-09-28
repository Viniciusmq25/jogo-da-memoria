const grid = document.querySelector('.grid')

const thumbs = [
  'image',
  'image (2)',
  'image (3)',
  'image (4)',
  'image (5)',
  'image (6)',
  'image (7)',
  'image (8)',
  'image (9)',
  'image (10)',
  'image (11)',
  'image (12)',
  'image (13)',
]

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disabledCard = document.querySelectorAll('.disable-card')

  if(disabledCard.length === 26){
    alert('ganhou ai cuzao!')
  }
}

const checkCards = () =>{
  const firstChar = firstCard.getAttribute('data-character')
  const secondChar = secondCard.getAttribute('data-character')

  if (firstChar === secondChar){

    firstCard.firstChild.classList.add('disable-card')
    secondCard.firstChild.classList.add('disable-card')

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else{

    setTimeout(() => {

      firstCard.classList.remove('reveal-card')
      secondCard.classList.remove('reveal-card')

      firstCard = '';
      secondCard = '';
    },500)

  }
}

const revealCard = ({target}) => {

  if(target.parentNode.className.includes('reveal-card')){
    return;
  }

  if(firstCard === ''){

    target.parentNode.classList.add('reveal-card')
    firstCard = target.parentNode;

  } else if(secondCard === ''){

    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards()

  }
  
}

const createCard = (thumb) => {
  
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('/img/${thumb}.jpg')`

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard)
  card.setAttribute('data-character', thumb)

  grid.appendChild(card)

  return card;

}

const loadGame = () => {

  const duplicateThumbs = [ ...thumbs, ...thumbs]

  const shuffledArray = duplicateThumbs.sort( () => Math.random() - 0.5)

  shuffledArray.forEach((thumb) => {
    
    const card = createCard(thumb);
    grid.appendChild(card)

  });

}

loadGame()

// let volta = 0
// let tempo = 0;
// let cronometro;
// const cronometroElement = document.querySelector('span');

// function atualizarCronometro(){
//   const horas = Math.floor(tempo / 3600)
//   const minutos = Math.floor((tempo % 3600) / 60)
//   const segundos = tempo % 60;
//   cronometroElement.textContent = `${String(horas).padStart(2, '0')} : ${String(minutos).padStart(2, '0')} : ${String (segundos).padStart(2, '0')}`;
// }

// window.onload = () => {
//   cronometro = setInterval( () => {
//     tempo++;//representando o tempo decorrido em segundos.
//     atualizarCronometro()
//   }, 1000)//1000 = 1seg
// }

