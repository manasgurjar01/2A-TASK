let loader = document.querySelector("#loader");
let users = document.querySelector("#users");

loader.style.display = "block";

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    loader.style.display = "none";

    data.forEach(function (user) {
      users.innerHTML += `
        <div class="user">
          <h2>${user.name}</h2>
          <p>${user.email}</p>
        </div>
      `;
    });
  })

  .catch(function () {
    loader.style.display = "none";
    users.innerHTML = "<p>Data load nahi ho paya</p>";
  });
