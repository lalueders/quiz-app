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

// Have to clean up this part and put it into component functions
// Nav-Bar
const buttonHome = document.querySelector('[data-nav="home"]');
const buttonBookmark = document.querySelector('[data-nav="bookmark"]');
const buttonCreate = document.querySelector('[data-nav="create"]');
const buttonProfile = document.querySelector('[data-nav="profile"]');

const pageHome = document.querySelector('[data-page="home"]');
const pageBookmark = document.querySelector('[data-page="bookmark"]');
const pageCreate = document.querySelector('[data-page="create"]');
const pageProfile = document.querySelector('[data-page="profile"]');

const isActiveHome = document.querySelector('[data-nav="home"]');
const isActiveBookmark = document.querySelector('[data-nav="bookmark"]');
const isActiveCreate = document.querySelector('[data-nav="create"]');
const isActiveProfile = document.querySelector('[data-nav="profile"]');

buttonHome.addEventListener('click', () => {
  pageHome.classList.remove('hidden');
  pageBookmark.classList.add('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');
  isActiveHome.classList.add('nav__is-active');
  isActiveBookmark.classList.remove('nav__is-active');
  isActiveCreate.classList.remove('nav__is-active');
  isActiveProfile.classList.remove('nav__is-active');
});

buttonBookmark.addEventListener('click', () => {
  pageBookmark.classList.remove('hidden');
  pageHome.classList.add('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');
  isActiveBookmark.classList.add('nav__is-active');
  isActiveHome.classList.remove('nav__is-active');
  isActiveCreate.classList.remove('nav__is-active');
  isActiveProfile.classList.remove('nav__is-active');
});

buttonCreate.addEventListener('click', () => {
  pageCreate.classList.remove('hidden');
  pageHome.classList.add('hidden');
  pageBookmark.classList.add('hidden');
  pageProfile.classList.add('hidden');
  isActiveCreate.classList.add('nav__is-active');
  isActiveHome.classList.remove('nav__is-active');
  isActiveBookmark.classList.remove('nav__is-active');
  isActiveProfile.classList.remove('nav__is-active');
});

buttonProfile.addEventListener('click', () => {
  pageProfile.classList.remove('hidden');
  pageHome.classList.add('hidden');
  pageBookmark.classList.add('hidden');
  pageCreate.classList.add('hidden');
  isActiveProfile.classList.add('nav__is-active');
  isActiveHome.classList.remove('nav__is-active');
  isActiveBookmark.classList.remove('nav__is-active');
  isActiveCreate.classList.remove('nav__is-active');
});

// Login Page

// Login
const buttonLogin = document.querySelector('[data-js="login-btn"]');
const inputUser = document.querySelector('[data-js="user"]');
const inputPassword = document.querySelector('[data-js="password"]');
const pageAll = document.querySelector('[data-page="page-all"]');
const pageNav = document.querySelector('[data-page="page-nav"]');
const pageLogin = document.querySelector('[data-page="login"]');
const formLogin = document.querySelector('[data-js="form"]');

buttonLogin.addEventListener('click', () => {
  if (inputUser.value === 'username' && inputPassword.value === 'password') {
    //pageAll.classList.remove('hidden');
    pageLogin.classList.add('hidden');
    pageNav.classList.remove('hidden');
    pageHome.classList.remove('hidden');
    pageBookmark.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');
    isActiveHome.classList.add('nav__is-active');
    isActiveBookmark.classList.remove('nav__is-active');
    isActiveCreate.classList.remove('nav__is-active');
    isActiveProfile.classList.remove('nav__is-active');
    formLogin.reset();
  } else {
    formLogin.reset();
  }
});

// Logout
const buttonLogout = document.querySelector('[data-js="logout"]');

buttonLogout.addEventListener('click', () => {
  pageLogin.classList.remove('hidden');
  pageNav.classList.add('hidden');
  pageHome.classList.add('hidden');
  pageBookmark.classList.add('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');
});
