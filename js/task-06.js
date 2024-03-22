const inputEl = document.querySelector('#validation-input');
const validLength = Number(inputEl.dataset.length);


const onInputBlur = (event) => {
    if (event.currentTarget.value.length === validLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
};

inputEl.addEventListener('blur', onInputBlur);