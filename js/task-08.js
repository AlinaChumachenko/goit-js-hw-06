// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей
//  в обьект, где имя поля будет именем свойства, а значение поля - значением 
//  свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы
//  методом reset.

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault()
    // console.dir(evt.currentTarget.elements);

       
    const valueEmail = evt.currentTarget.elements.email.value;
    const valuePassword = evt.currentTarget.elements.password.value;
    if (valueEmail === "" || valuePassword === "") {
        return alert("Всі поля мають бути заповнені!");}

    // if (valueEmail === "" || valuePassword === "") {
    //     return alert("Всі поля мають бути заповнені!");} 
    // else if (valueEmail === "") {
    //     return alert("Не заповнено поле Email!");}
    // else {return alert("Не заповнено поле Password!");}   
     

    const {email, password} = evt.currentTarget.elements;
    // console.dir(email.value);
    // console.dir(password.value);
    const data = {
        email: email.value,
        password: password.value,
    }
    console.dir(data);

    console.log(data);
    evt.currentTarget.reset();

}

