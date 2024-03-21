const inputEL = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

const isInputName = (event) => {
    event.preventDefault();
    nameEl.textContent = event.currentTarget.value;

    if (event.target.value === '') {
		nameEl.textContent = 'Anonymous'
	}
};



inputEL.addEventListener('input', isInputName);

