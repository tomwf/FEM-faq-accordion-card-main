// Make text bold and animate arrow after clicking on a question
document.addEventListener('click', (e) => {

  const cardQuestion = e.target;

  if (cardQuestion.className === 'card__question') {
    if (!cardQuestion.parentNode.open) {
      cardQuestion.style.fontWeight = '700';
      cardQuestion.firstElementChild.style.transform = 'rotate(180deg)';  
    } else {
      cardQuestion.style.fontWeight = 'initial';
      cardQuestion.firstElementChild.style.transform = 'initial';  
    }
  }

});

// Illustration box animation when hovering a question
// When mouse is hovering on a question
document.addEventListener('mouseover', (e) => {

  const cardQuestion = e.target;

  if (cardQuestion.className === 'card__question') {
    document.querySelector('.illustration-box').style.transform = 'translateX(-20%)';
  }

});

// When mouse is hovering off a question
document.addEventListener('mouseout', (e) => {

  const cardQuestion = e.target;

  if (cardQuestion.className === 'card__question') {
    document.querySelector('.illustration-box').style.transform = 'initial';
  }

});

