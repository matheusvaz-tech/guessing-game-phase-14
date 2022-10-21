const screen_1 = document.querySelector("main");
const screen_2 = document.querySelector("section");

const randomNumber = Number(Math.round(Math.random() * 10));
let xAttempts = 1;

// Função callback
function handleTryClick(event) {
  event.preventDefault(); // Não faça o padrão

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) === randomNumber) {
    screen_1.classList.add("hide");
    screen_2.classList.remove("hide");

    screen_2.querySelector("h2 strong").innerText = xAttempts; // Posso pegar um elemento dentro de outro que já foi pego (e declarado)
  }

  inputNumber.value = "";

  xAttempts++;
}

// Eventos
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", function () {
  screen_1.classList.remove("hide");
  screen_2.classList.add("hide");

  xAttempts = 1;
});
