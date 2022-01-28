export default function Create(createElement) {
  //  Char counter
  const inputText = createElement.querySelector('[data-js="input"]');
  const outputElement = createElement.querySelector('[data-js="output"]');

  const maxChar = 300;
  outputElement.value = `${maxChar} / ${maxChar}`;

  inputText.addEventListener('input', () => {
    //console.log(count);
    const count = maxChar - inputText.value.length;
    outputElement.value = `${count} / ${maxChar}`;
  });
}
