let quote = document.querySelector("#quote");
let btn = document.querySelector("#btn");

let quotes = [
  "Believe in yourself.",
  "Never give up.",
  "Success comes with hard work.",
  "Dream big and work hard.",
  "Every day is a new beginning.",
];

btn.addEventListener("click", () => {
  let ran = Math.floor(Math.random() * 5);

  quote.textContent = quotes[ran];
});
