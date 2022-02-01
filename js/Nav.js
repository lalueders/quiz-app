export default function Nav(clickNavItem) {
  const allButtons = document.querySelectorAll('[data-nav]');
  const allPages = document.querySelectorAll('[data-page]');

  allButtons.forEach(button => {
    button.addEventListener('click', event => {
      allPages.forEach(page => {
        page.classList.add('hidden');
      });
      allButtons.forEach(button => {
        button.classList.remove('nav__is-active');
      });
      const buttonAttribute = event.currentTarget.getAttribute('data-nav');
      console.log(buttonAttribute);
      const currentPage = document.querySelector(
        `[data-page="${buttonAttribute}"]`
      );
      const currentButton = document.querySelector(
        `[data-nav="${buttonAttribute}"]`
      );
      currentPage.classList.remove('hidden');
      currentButton.classList.add('nav__is-active');
    });
  });
}

// First Steps - My way to glory ;) - First try for the Nav function:

// const buttonHome = document.querySelector('[data-nav="home"]');
// const buttonBookmark = document.querySelector('[data-nav="bookmark"]');
// const buttonCreate = document.querySelector('[data-nav="create"]');
// const buttonProfile = document.querySelector('[data-nav="profile"]');

// const pageHome = document.querySelector('[data-page="home"]');
// const pageBookmark = document.querySelector('[data-page="bookmark"]');
// const pageCreate = document.querySelector('[data-page="create"]');
// const pageProfile = document.querySelector('[data-page="profile"]');

// const isActiveHome = document.querySelector('[data-nav="home"]');
// const isActiveBookmark = document.querySelector('[data-nav="bookmark"]');
// const isActiveCreate = document.querySelector('[data-nav="create"]');
// const isActiveProfile = document.querySelector('[data-nav="profile"]');

// buttonHome.addEventListener('click', () => {
//   pageHome.classList.remove('hidden');
//   pageBookmark.classList.add('hidden');
//   pageCreate.classList.add('hidden');
//   pageProfile.classList.add('hidden');
//   isActiveHome.classList.add('nav__is-active');
//   isActiveBookmark.classList.remove('nav__is-active');
//   isActiveCreate.classList.remove('nav__is-active');
//   isActiveProfile.classList.remove('nav__is-active');
// });

// buttonBookmark.addEventListener('click', () => {
//   pageBookmark.classList.remove('hidden');
//   pageHome.classList.add('hidden');
//   pageCreate.classList.add('hidden');
//   pageProfile.classList.add('hidden');
//   isActiveBookmark.classList.add('nav__is-active');
//   isActiveHome.classList.remove('nav__is-active');
//   isActiveCreate.classList.remove('nav__is-active');
//   isActiveProfile.classList.remove('nav__is-active');
// });

// buttonCreate.addEventListener('click', () => {
//   pageCreate.classList.remove('hidden');
//   pageHome.classList.add('hidden');
//   pageBookmark.classList.add('hidden');
//   pageProfile.classList.add('hidden');
//   isActiveCreate.classList.add('nav__is-active');
//   isActiveHome.classList.remove('nav__is-active');
//   isActiveBookmark.classList.remove('nav__is-active');
//   isActiveProfile.classList.remove('nav__is-active');
// });

// buttonProfile.addEventListener('click', () => {
//   pageProfile.classList.remove('hidden');
//   pageHome.classList.add('hidden');
//   pageBookmark.classList.add('hidden');
//   pageCreate.classList.add('hidden');
//   isActiveProfile.classList.add('nav__is-active');
//   isActiveHome.classList.remove('nav__is-active');
//   isActiveBookmark.classList.remove('nav__is-active');
//   isActiveCreate.classList.remove('nav__is-active');
// });
