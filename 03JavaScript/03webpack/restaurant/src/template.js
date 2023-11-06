//import myName from './myName';

// function component() {
//   const element = document.createElement('div');

//   // use your function!
//   element.textContent = myName('Cody');
//   return element;
// }

// document.body.appendChild(component());

function componentTemplate() {
  const element = document.createElement("header");
  element.classList.add("main-header");
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  nav.classList.add("main-nav");

  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const aHome = document.createElement("a");
  aHome.textContent = "home";
  aHome.setAttribute("href", "index.html");
  li1.appendChild(aHome);
  ul.appendChild(li1);
  const li2 = document.createElement("li");
  const aCores = document.createElement("a");
  aCores.textContent = "Cores";
  aCores.setAttribute("href", "cores.html");
  li2.appendChild(aCores);
  ul.appendChild(li2);
  const li3 = document.createElement("li");
  const aSobre = document.createElement("a");
  aSobre.textContent = "Sobre";
  aSobre.setAttribute("href", "sobre.html");
  li3.appendChild(aSobre);
  ul.appendChild(li3);
  nav.appendChild(ul);
  element.appendChild(nav);
  const loja = document.createElement("h1");
  loja.textContent = "SO Cores";
  loja.classList.add("loja-name");
  loja.classList.add("loja-name-large");
  //element.appendChild(nav);
  element.appendChild(loja);

  return element;
}

export { componentTemplate };

// document.body.appendChild(component());
