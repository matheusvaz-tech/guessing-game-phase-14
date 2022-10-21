// Variáveis
const screen_1 = document.querySelector("main");
const screen_2 = document.querySelector("section");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

let randomNumber = Number(Math.round(Math.random() * 10));
let xAttempts = 1;

// Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", pressEnter);

//Funções
function handleTryClick(event) {
  event.preventDefault(); // Não faça o padrão

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) === randomNumber) {
    toggleScreen();
    screen_2.querySelector("h2 strong").innerText = xAttempts; // Posso pegar um elemento dentro de outro que já foi pego (e declarado)
  }

  inputNumber.value = "";

  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;

  randomNumber = Number(Math.round(Math.random() * 10));
}

function toggleScreen() {
  screen_1.classList.toggle("hide");
  screen_2.classList.toggle("hide");
}

function pressEnter(e) {
  if (e.key == "Enter" && screen_1.classList.contains("hide")) {
    handleResetClick();
  }
}
