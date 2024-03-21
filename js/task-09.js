const colorName = document.querySelector('.color');
const colorChanger = document.querySelector('.change-color');


function onChangeColor(event) {
  document.body.style.backgroundColor =  colorName.textContent = getRandomHexColor();
  
};

colorChanger.addEventListener('click', onChangeColor);



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
