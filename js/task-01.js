const listCategories = document.querySelector('#categories');
const listItems = listCategories.querySelectorAll(".item");
const listItemsArray = [...listItems];
console.log('Number of categories:', listItemsArray.length);


const showCategories = (categories) => {
    return categories.forEach(category => {
        const headingContent = category.querySelector('h2').textContent;
        const itemQuantity = category.querySelectorAll('li').length;
        console.log("Category:", headingContent);
        console.log("Elements:", itemQuantity);
    });
};

const categoriesNameElements = showCategories(listItemsArray);