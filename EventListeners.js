//manipulacao dom

//event lister

//element.addEventListner("click", function)

const buttonTwo = document.querySelector(".botaoCaixa2");

function alertBtn() {
  alert("I Also love Javascript");
}

buttonTwo.addEventListener("click", alertBtn);

//mouseover

const newBackgroundColor = document.querySelector(".botaoCaixa3");

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "blue";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);
