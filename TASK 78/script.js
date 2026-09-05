let sort = document.querySelector("#sort");
let products = document.querySelector("#products");
let cards = document.querySelectorAll(".card");

sort.addEventListener("change", function () {
  let cardsArray = Array.from(cards);
  if (sort.value == "low") {
    cardsArray.sort(function (a, b) {
      let priceA = Number(a.querySelector(".price").innerText);
      let priceB = Number(b.querySelector(".price").innerText);
      return priceA - priceB;
    });
  }

  if (sort.value == "high") {
    cardsArray.sort(function (a, b) {
      let priceA = Number(a.querySelector(".price").innerText);
      let priceB = Number(b.querySelector(".price").innerText);
      return priceB - priceA;
    });
  }

  cardsArray.forEach(function (card) {
    products.appendChild(card);
  });
});
