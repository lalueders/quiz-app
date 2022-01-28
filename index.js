import Card from './js/Card.js';
import Create from './js/Create.js';

// NodeList [HTMLElement, HTMLElement]
const allCardElements = document.querySelectorAll('[data-js="card"]');
allCardElements.forEach(cardElement => {
  Card(cardElement);
});

const allCreateElements = document.querySelectorAll('[data-js="create"]');
allCreateElements.forEach(createElement => {
  Create(createElement);
});
