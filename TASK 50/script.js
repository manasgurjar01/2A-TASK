let emojis = ["🍎", "🍎", "🍌", "🍌", "🍕", "🍕"];

emojis.sort(() => Math.random() - 0.5);

let firstCard = null;
let secondCard = null;

for (let i = 0; i < emojis.length; i++) {
  let card = document.createElement("div");

  card.className = "card";
  card.innerText = "?";

  card.dataset.value = emojis[i];

  card.onclick = function () {
    if (card.innerText != "?") {
      return;
    }

    card.innerText = card.dataset.value;

    if (firstCard == null) {
      firstCard = card;
    } else {
      secondCard = card;

      if (firstCard.dataset.value == secondCard.dataset.value) {
        firstCard = null;
        secondCard = null;
      } else {
        setTimeout(function () {
          firstCard.innerText = "?";
          secondCard.innerText = "?";

          firstCard = null;
          secondCard = null;
        }, 800);
      }
    }
  };

  document.getElementById("game").appendChild(card);
}
