let select = document.querySelector(".select");
let city = document.querySelectorAll(".city");

select.addEventListener("click", () => {
  for (let i = 0; i < city.length; i++) {
    city[i].style.display = "block";
  }
});