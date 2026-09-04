let category = document.querySelector("#category");

let cards = document.querySelectorAll(".card");

category.addEventListener("change", function () {
  let selectedCategory = category.value;

  cards.forEach(function (card) {
    let productCategory = card.dataset.category;

    if (selectedCategory == "all" || selectedCategory == productCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
