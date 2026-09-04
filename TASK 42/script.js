let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

btn.addEventListener("click", () => {
  let input = document.querySelector("#inp").value;

  if (
    input.length >= 8 &&
    (input.includes("@") || input.includes("#")) &&
    !input.includes(" ")
  ) {
    result.innerHTML = "Strong Password";
  } else {
    result.innerHTML = "Weak Password";
  }
});
