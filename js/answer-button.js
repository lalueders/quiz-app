// Show/hide answer and change button text accordingly //

export function answerButton() {
  const answerText = document.querySelector('[data-js="answer-text"]');
  const buttonCard = document.querySelector('[data-js="button-card"]');

  buttonCard.addEventListener('click', () => {
    answerText.classList.toggle('hidden');
    if (buttonCard.textContent === 'Hide Answer') {
      return (buttonCard.textContent = 'Show Answer');
    }
    return (buttonCard.textContent = 'Hide Answer');
  });
}
