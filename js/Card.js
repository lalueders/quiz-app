export default function Card(cardElement) {
  //Check/uncheck bookmark
  const buttonBookmark = cardElement.querySelector(
    '[data-js="button-bookmark"]'
  );
  const bookmarkCheck = cardElement.querySelector(
    '[data-js="bookmark-checked"]'
  );
  const bookmarkUncheck = cardElement.querySelector(
    '[data-js="bookmark-unchecked"]'
  );
  buttonBookmark.addEventListener('click', () => {
    bookmarkCheck.classList.toggle('hidden');
    bookmarkUncheck.classList.toggle('hidden');
  });

  // Show/hide answer and change button text accordingly //
  const answerText = cardElement.querySelector('[data-js="answer-text"]');
  const buttonCard = cardElement.querySelector('[data-js="button-card"]');

  buttonCard.addEventListener('click', () => {
    answerText.classList.toggle('hidden');
    if (buttonCard.textContent === 'Hide Answer') {
      return (buttonCard.textContent = 'Show Answer');
    }
    return (buttonCard.textContent = 'Hide Answer');
  });
}
