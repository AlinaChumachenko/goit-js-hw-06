// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, 
// если неправильное - красным
// Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
const textInput = document.querySelector('#validation-input');
// console.log (textInput);
textInput.addEventListener('blur', onInputBlur);
function onInputBlur (evt) {
    // console.dir(evt.target.value.length);
    // console.dir(textInput.getAttribute('data-length'));
    const titleLength = evt.target.value.length;
    const dataAttribute = textInput.getAttribute('data-length');
    if (titleLength == dataAttribute) {
// console.log('работает!');
textInput.classList.add('valid');
textInput.classList.remove('invalid');

    } 
    else {
        // console.log('не работает!');
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
       
    }

}
