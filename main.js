//Check/uncheck bookmark

const buttonBookmark = document.querySelector('[data-js="button-bookmark"]');
const bookmarkCheck = document.querySelector('[data-js="bookmark-checked"]');
const bookmarkUncheck = document.querySelector(
  '[data-js="bookmark-unchecked"]'
);

buttonBookmark.addEventListener('click', () => {
  bookmarkCheck.classList.toggle('hidden');
  bookmarkUncheck.classList.toggle('hidden');
});

// Show/hide answer and change button text accordingly //

const answerText = document.querySelector('[data-js="answer-text"]');
const buttonCard = document.querySelector('[data-js="button-card"]');

buttonCard.addEventListener('click', () => {
  answerText.classList.toggle('hidden');
  if (buttonCard.textContent === 'Hide Answer') {
    return (buttonCard.textContent = 'Show Answer');
  }
  return (buttonCard.textContent = 'Hide Answer');
});
