let stars = document.querySelectorAll(".star");
let result = document.querySelector("#result");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    for (let i = 0; i < stars.length; i++) {
      if (i <= index) {
        stars[i].innerHTML = "★";
      } else {
        stars[i].innerHTML = "☆";
      }
    }

    result.innerHTML = `Rating: ${index + 1}/5`;
  });
});
