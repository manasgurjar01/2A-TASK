let search = document.querySelector("#search");
let list = document.querySelector("#list");

let users = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    users = data;

    showData(users);
  });

function showData(arr) {
  list.innerHTML = "";

  arr.forEach((user) => {
    list.innerHTML += `
      <li>${user.name}</li>
    `;
  });
}

search.addEventListener("input", () => {
  let text = search.value.toLowerCase();

  let result = users.filter((user) => {
    return user.name.toLowerCase().includes(text);
  });

  showData(result);
});
