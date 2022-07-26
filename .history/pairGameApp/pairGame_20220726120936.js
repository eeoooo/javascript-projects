let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let time = document.querySelector('.time');
let sec = document.querySelector('.sec');
let milisec = document.querySelector('.milisec');
let container = document.querySelector('.container');

let cards = ['1','2','3','4','1','2','3','4']

cards = shuffle(cards);
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

for (card of cards){
    let cardBox = document.createElement('div');
    cardBox.setAttribute('class','card');
    let cardFront = document.createElement('div');
    cardFront.setAttribute('class','card-front');
    let cardFrontSpan = document.createElement('span');
    cardFrontSpan.textContent = '?';
    cardFront.append(cardFrontSpan);

    let cardBack = document.createElement('Back');
    let cardBackSpan = document.createElement('span');
    cardBack.setAttribute('class','card-back');
    cardBackSpan.textContent = card;
    cardBack.append(cardBackSpan);

    cardBox.append(cardFront);
    cardBox.append(cardBack);
    container.append(cardBox);

    card.addEventListener('click', () => {
        card.style.transform = 'rotateX(-180deg)';
        console.dir(cardBack);
    })
}


