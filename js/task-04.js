const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;
const valueScore = document.getElementById('value');

const onDecrementBtn = (event) => {
    counterValue -= 1;
    valueScore.textContent = counterValue;
};

const onIncrementBtn = (event) => {
    counterValue += 1;
    valueScore.textContent = counterValue;
};

decrementBtn.addEventListener('click', onDecrementBtn);
incrementBtn.addEventListener('click', onIncrementBtn);