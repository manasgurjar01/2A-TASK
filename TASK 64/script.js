let btn = document.querySelector("#btn");
let text = document.querySelector('h1');
let theme = "light";

btn.addEventListener("click", () => {
  let body = document.body;

  if (theme == "light") {
    body.style.backgroundColor = "black";
    text.style.color = "white"
    theme = "dark";
  } else {
    body.style.backgroundColor = "white";
      text.style.color = "black";
    theme = "light";
  }
});
