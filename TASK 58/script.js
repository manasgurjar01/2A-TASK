let click = document.querySelector("#btn");
let data = document.querySelector("#discrip");

click.addEventListener("click", () => {
  if (data.style.display === "none") {
    data.style.display = "block";
  } else {
    data.style.display = "none";
  }
});
