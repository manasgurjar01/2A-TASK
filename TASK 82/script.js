let loader = document.querySelector("#loader");
let users = document.querySelector("#users");

// Loader show
loader.style.display = "block";

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    // Data aa gaya, loader hide
    loader.style.display = "none";

    // Users show
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
    // Error par loader hide
    loader.style.display = "none";

    users.innerHTML = "<p>Data load nahi ho paya</p>";
  });
