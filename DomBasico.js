// html:
// <div class="containerPrincipal">
// <div class="lista">
//   <h3 id="mainHeader">Filme Favorito</h3>
//   <ul class="containerLista">
//     <li class="itemLista">Senhor dos aneis</li>
//     <li class="itemLista">Star Wars</li>
//     <li class="itemLista">Harry Potter</li>
//     <li class="itemLista">Lord of th erings</li>
//     <li class="itemLista">Marvel</li>
//   </ul>
// </div>

//Manipulacao DOM

//GeeElementById

// const title = document.getElementById("mainHeader");

// console.log(title);

//GetElementByClassName()

// const listaItem = document.getElementsByClassName("containerLista");
// console.log(listaItem);

//GetElementByTagName()

// const todosLi = document.getElementsByTagName("li");
// console.log(todosLi);

//querySelector()
//O carry seleciona a primeira aparicao do elemento listado

// const container = document.querySelector("div");

// console.log(container);

//querrySelectorAll()
//seleciona todos os elementos encontrados
// const container = document.querySelectorAll("div");

// console.log(container);

//manipuilacao DOM

// const title = document.querySelector("#mainHeader");
// title.style.color = "red";
// console.log(title);

// const listItems = document.querySelectorAll(".itemLista");
// for (i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = "2rem";
// }

// //Criando Elementos

// const listaFilmes = document.querySelector("ul");
// const li = document.createElement("li");

// //insiro li dentro da minha lista

// listaFilmes.append(li);

// //modificando o texto

// li.innerText = "X-men";

// //modificando atributos e classes

// li.classList.add("itemLista");

// //remover elementos
// li.remove();

let ul = document.querySelector("ul");
// console.log(ul);
// console.log(ul.parentNode);
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement);
// console.log(ul.parentElement.parentElement);
console.log(ul.childNodes);
