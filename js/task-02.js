const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const list = document.querySelector('ul#ingredients')
const newList = [];

ingredients.forEach(element => {
	const li = document.createElement('li');
	li.classList.add('item');
	li.textContent = element;
	newList.push(li);
})

list.append(...newList);
console.log(ingredients);


// const li = document.createElement('li');
// li.textContent = 'Potatoes';
// li.classList.add('item');
// console.log(li);

// const li2 = document.createElement('li');
// li2.textContent = 'Mushrooms';
// li2.classList.add('item');
// console.log(li2);

// const li3 = document.createElement('li');
// li3.textContent = 'Garlic';
// li3.classList.add('item');
// console.log(li3);

// const li4 = document.createElement('li');
// li4.textContent = 'Tomatos';
// li4.classList.add('item');
// console.log(li4);

// const li5 = document.createElement('li');
// li5.textContent = 'Herbs';
// li5.classList.add('item');
// console.log(li5);

// const li6 = document.createElement('li');
// li6.textContent = 'Condiments';
// li6.classList.add('item');
// console.log(li6);

// newList.append(li, li2, li3, li4, li5, li6);




