
const text = document.querySelector('h1');

function typewritter(textElement) {
  const textArray = textElement.innerText.split('');
  textElement.innerHTML = '';
  textArray.forEach((letter, index) => {
    setTimeout(() => {
      textElement.innerHTML += letter;
    }, 75 * index);
  });
}

typewritter(text);