const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('ul');

const makeListElement = (elements) => {
  return elements.map(element => {
    const liElement = document.createElement('li');
    liElement.textContent = element;
    return (liElement);
  });
};

const listElements = makeListElement(ingredients);
list.append(...listElements);

