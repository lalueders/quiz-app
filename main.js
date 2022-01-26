const button = document.querySelector('[data-js="button"]');
const bookmarkCheck = document.querySelector('[data-js="check"]');
const bookmarkUncheck = document.querySelector('[data-js="uncheck"]');

button.addEventListener('click', () => {
  bookmarkCheck.classList.toggle('hidden');
  bookmarkUncheck.classList.toggle('hidden');
});

const answer = document.querySelector('[data-js="answer"]');
const buttonAnswer = document.querySelector('[data-js="buttonAnswer"]');
const buttonShow = document.querySelector('[data-js="show-answer"]');
const buttonHide = document.querySelector('[data-js="hide-answer"]');

buttonAnswer.addEventListener('click', () => {
  answer.classList.toggle('hidden');
  buttonShow.classList.toggle('hidden');
  buttonHide.classList.toggle('hidden');
});
