let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

btn.addEventListener("click", () => {
  let input = document.querySelector("#input").value;

  let arr = input.split(",");

  let numbers = arr.map((value) => {
    return Number(value);
  });

  let sorted = numbers.sort((a, b) => {
    return a - b;
  });

  result.innerHTML = sorted;
});
