function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов.
//  Пользователь вводит количество элементов в input и нажимает 
//  кнопку Создать, после чего рендерится коллекция. При нажатии на 
//  кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>
// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - 
// число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй 
// готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//  тем самым удаляя все созданные элементы.

// const inputNum = document.querySelector('#controls>input');
// const btnCreate = document.querySelector('button[data-create]');
// const btnDestroy = document.querySelector('button[data-destroy]');
// const boxes = document.querySelector('#boxes');
// // console.log(boxes);

// function createBoxes (amount) {
//   const elements = [];

// for (let i = 0; i < amount; i += 1) {
//   // console.log(amount[i]);
//   	const div = document.createElement('div')
// 		div.style.height = `${30 + 10 * i}px`
// 		div.style.width = `${30 + 10 * i}px`
// 		div.style.background = getRandomHexColor()
// 		elements.push(div)
	
// } return elements

// };

// btnCreate.addEventListener ('click', onBtnCreateClick);
// function onBtnCreateClick (evt) {

// };

// btnDestroy.addEventListener ('click', onBtnDestroyClick);
// function onBtnCreateClick (evt) {

// };
