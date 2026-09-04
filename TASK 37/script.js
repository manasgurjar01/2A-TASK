let count = 0;

let incre = document.querySelector("#incre");
let decre = document.querySelector("#decre");
let reset = document.querySelector("#reset");
let result = document.querySelector("#result");

incre.addEventListener("click", () => {
  count++;
  result.innerHTML = count;
});
decre.addEventListener("click", () => {
  if (count > 0) {
    count--;
    result.innerHTML = count;
  }
});
reset.addEventListener("click", () => {
    count=0;
  result.innerHTML = 0;
});
