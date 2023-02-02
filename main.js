const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let boardLocked = false;
let firstCard, secondCard;

let countMatch = [];



const flipCard = e => {
  if (boardLocked) return;

  const target = e.target.parentElement;

  if (target === firstCard) return;

  target.classList.add('flip');

    if (!hasFlippedCard) {
      
      hasFlippedCard = true;
      firstCard = target;
      
    } else {
     

      hasFlippedCard = false;
      secondCard = target;


      checkForMatch();
    }
};

  const checkForMatch = () => {
    const isEqual = firstCard.dataset.pic === secondCard.dataset.pic
    isEqual ? disableCards() : unflipCards();
    
    if (isEqual == true) {
      countMatch.push(isEqual)
    }  if (countMatch.length > 7) {
        buttonWrapper.append(button);
        container.append(buttonWrapper);
      }
  };

  const disableCards = () => {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
  }

  const unflipCards = () => {
    boardLocked = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      reset();
    }, 1000);
  };

  const reset = () => {
    hasFlippedCard = boardLocked = false;
    firstCard = secondCard = null;
  }

  // кнопка

  let buttonWrapper = document.createElement('div');
  let button = document.createElement('button');
  button.classList = 'resetGame';
  button.textContent = 'Начать заново';
  let container = document.querySelector('.container');


  function refreshPage(){
    window.location.reload();
}
  button.addEventListener('click', refreshPage);



cards.forEach(card => {
  card.addEventListener('click', flipCard)

  const randomIndex = Math.floor(Math.random() * cards.length)

  card.style.order = randomIndex;
})
