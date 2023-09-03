function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change-color и выводит значение цвета
//  в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>


// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


// У вас друге посилання на локальну робочу сторінку.
// У дев'ятому завданні виклик функції getRandomHexColor
//  потрібно записати в змінну та потім її використовувати для зміни фону
//   і текстового значення тегу span. У вашому випадку функція викликається два рази, 
//   тому колір фону буде відрізнятись від коду кольору в спані.

// const body = document.querySelector('body');
const span = document.querySelector('.color');
const button = document.querySelector('.change-color');

// console.log(body);
// console.log(span);
// console.log(button);

button.addEventListener('click', onButtonClik);

function onButtonClik (evt) {
// console.dir(evt.currentTarget);
let color = getRandomHexColor();
document.body.style.backgroundColor = color;
span.textContent = color;
}

