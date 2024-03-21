const inputEl = document.querySelector('#validation-input');

const onInputBlur = (event) => {
    if (event.currentTarget.value.length === 6) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
};

inputEl.addEventListener('blur', onInputBlur);