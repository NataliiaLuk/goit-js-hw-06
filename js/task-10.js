const buttons = document.querySelectorAll('button');
const create = buttons[0];
const destroy = buttons[1];
const inputNumber = document.querySelector('input');
console.log(inputNumber);

const boxEl = document.createElement('div');

function createBoxes(amount) {
  for (let i = 0; i = amount; i += 1) {
    const box = document.createElement('div');
    box.style.color = getRandomHexColor();
  }
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

create.addEventListener('click', createBoxes(inputNumber));