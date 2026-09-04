let timer;
let input = document.querySelector(".inp");

input.addEventListener("keyup", () => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    console.log("searching.........");
  }, 1000);
});