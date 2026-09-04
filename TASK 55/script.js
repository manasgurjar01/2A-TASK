let fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Grapes",
  "Papaya",
  "Guava",
];

let search = document.querySelector("#search");

let list = document.querySelector("#list");

function showData(arr) {
  list.innerHTML = "";

  arr.forEach((item) => {
    list.innerHTML += `<li>${item}</li>`;
  });
}

showData(fruits);

search.addEventListener("input", () => {
  let text = search.value.toLowerCase();

  let result = fruits.filter((item) => {
    return item.toLowerCase().includes(text);
  });

  showData(result);
});
