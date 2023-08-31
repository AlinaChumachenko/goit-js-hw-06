// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, 
// в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const textInput = document.querySelector('#name-input');
// console.log(textInput);
const textOutput = document.querySelector('#name-output');
// console.log(textOutput);
textInput.addEventListener('input', onInputChange);

function onInputChange(evt) {
    // console.log(evt.currentTarget.value);
    
    if (evt.currentTarget.value === '') {
		textOutput.textContent = 'Anonymous'
	} else {
        textOutput.textContent = evt.currentTarget.value}
}

 