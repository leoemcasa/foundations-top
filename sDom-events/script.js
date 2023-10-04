const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content');
content.textContent = 'Hey I’m red!';

const contentH3 = document.createElement('h3');
contentH3.classList.add('content-h3');
contentH3.textContent = 'I’m a blue h3!';

const divBlack = document.createElement('div');
divBlack.classList.add('div-black');
divBlack.style.borderColor = 'blue';
divBlack.style.backgroundColor = 'pink';

const divBlackH1 = document.createElement('h1');
divBlackH1.textContent =  'I’m in a div';

const divBlackP = document.createElement('p');
divBlackP.textContent = 'ME TOO!'

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert("Hello World Too");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', alertFunction);

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', function (e) {
    console.log(e.target);
});

btn5.addEventListener('dblclick', function (e) {
    e.target.style.background = 'blue';
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

container.appendChild(content);
container.appendChild(contentH3);
container.appendChild(divBlack);
divBlack.appendChild(divBlackH1);
divBlack.appendChild(divBlackP);
