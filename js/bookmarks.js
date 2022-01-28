//Check/uncheck bookmark

export function bookmarks() {
  const buttonBookmark = document.querySelector('[data-js="button-bookmark"]');
  const bookmarkCheck = document.querySelector('[data-js="bookmark-checked"]');
  const bookmarkUncheck = document.querySelector(
    '[data-js="bookmark-unchecked"]'
  );

  buttonBookmark.addEventListener('click', () => {
    bookmarkCheck.classList.toggle('hidden');
    bookmarkUncheck.classList.toggle('hidden');
  });
}
