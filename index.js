import Card from './js/Card.js';
import Create from './js/Create.js';
import Nav from './js/Nav.js';

// NodeList [HTMLElement, HTMLElement]
const allCardElements = document.querySelectorAll('[data-js="card"]');
allCardElements.forEach(cardElement => {
  Card(cardElement);
});

const allCreateElements = document.querySelectorAll('[data-js="create"]');
allCreateElements.forEach(createElement => {
  Create(createElement);
});

// Navigation
Nav();

// This fantastic login-feature will come in the future:

// // Login:

// const buttonLogin = document.querySelector('[data-js="login-btn"]');
// const inputUser = document.querySelector('[data-js="user"]');
// const inputPassword = document.querySelector('[data-js="password"]');
// const pageAll = document.querySelector('[data-page="page-all"]');
// const pageNav = document.querySelector('[data-page="page-nav"]');
// const pageLogin = document.querySelector('[data-page="login"]');
// const formLogin = document.querySelector('[data-js="form"]');

// buttonLogin.addEventListener('click', () => {
//   if (inputUser.value === 'username' && inputPassword.value === 'password') {
//     pageAll.classList.remove('hidden');
//     pageLogin.classList.add('hidden');
//     pageNav.classList.remove('hidden');
//     pageHome.classList.remove('hidden');
//     pageBookmark.classList.add('hidden');
//     pageCreate.classList.add('hidden');
//     pageProfile.classList.add('hidden');
//     isActiveHome.classList.add('nav__is-active');
//     isActiveBookmark.classList.remove('nav__is-active');
//     isActiveCreate.classList.remove('nav__is-active');
//     isActiveProfile.classList.remove('nav__is-active');
//     formLogin.reset();
//   } else {
//     formLogin.reset();
//   }
// });

// // Logout
// const buttonLogout = document.querySelector('[data-js="logout"]');

// buttonLogout.addEventListener('click', () => {
//   pageLogin.classList.remove('hidden');
//   pageNav.classList.add('hidden');
//   pageHome.classList.add('hidden');
//   pageBookmark.classList.add('hidden');
//   pageCreate.classList.add('hidden');
//   pageProfile.classList.add('hidden');
// });
