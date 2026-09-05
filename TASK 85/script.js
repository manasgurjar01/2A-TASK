let currentPage = 1;
let users = document.querySelector("#users");
let page = document.querySelector("#page");
let previous = document.querySelector("#previous");
let next = document.querySelector("#next");

function showUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      let start = (currentPage - 1) * 5;
      let userList = data.slice(start, start + 5);
      users.innerHTML = "";
      userList.forEach(function (user) {
        users.innerHTML += `
                            <p>${user.name}</p>
                            <hr>
                        `;
      });
      page.innerText = currentPage;
    });
}

next.addEventListener("click", function () {
  if (currentPage < 2) {
    currentPage++;
    showUsers();
  }
});

previous.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    showUsers();
  }
});

showUsers();
