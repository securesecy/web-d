let heading1 = document.getElementsByTagName("h1");
console.log(heading1);

let art = document.getElementById('abc');
console.log(art);

art.style.backgroundColor='red';
art.style.color='yellow';

let div = document.getElementsByClassName('box');
console.log(div);

let data = document.querySelector('#abc');
let data1 = document.querySelectorAll('.box');
console.log(data);
console.log(data1);

let inputName = document.getElementsByClassName("name");
console.log(inputName);

let btnSubmit = document.querySelector('.submit');
btnSubmit.addEventListener("click" , () => {
    alert(`Welcome ${inputName.innerText}`);
});

