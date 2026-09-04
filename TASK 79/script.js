let buttons = document.querySelectorAll(".btn");
let modal = document.querySelector("#modal");
let modalContent = document.querySelector("#modalContent");
let close = document.querySelector("#close");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let card = button.parentElement;
    modalContent.innerHTML = card.innerHTML;
    modalContent.innerHTML += '<button class="close" id="close">X</button>';
    modal.style.display = "flex";

    document.querySelector("#close").addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
});
