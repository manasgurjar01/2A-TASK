let RandomNum = Math.floor(Math.random() * 5 + 1);
console.log(RandomNum);

let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

btn.addEventListener("click", () => {
  let input = document.querySelector("#inp").value;

  if (input == RandomNum) {
    result.innerHTML = `You Win..! Number is ${RandomNum}`;
  } else {
    result.innerHTML = `You Lose..! Number is ${RandomNum}`;
  }
});
