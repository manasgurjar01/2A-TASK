let openbtn = document.querySelector("#open");
let closebtn = document.querySelector("#close");
let main = document.querySelector(".main");

openbtn.addEventListener("click", () => {
  main.style.display = "block";
});
closebtn.addEventListener("click", () => {
  main.style.display = "none";
});
