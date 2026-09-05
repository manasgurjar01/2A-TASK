let btn = document.querySelector("#btn");
let words = document.querySelector("#words");
let characters = document.querySelector("#characters");

btn.addEventListener("click", () => {
  let input = document.querySelector("#input-box").value;

  let charCount = input.length;

  let wordCount = input.trim().split(" ").length;

  characters.innerHTML = `Characters : ${charCount}`;

  words.innerHTML = `Words : ${wordCount}`;
});
