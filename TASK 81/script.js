let users = document.querySelector("#user");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      users.innerHTML += `
                        <p>${user.name}</p>
                        <p>${user.email}</p>
                        <hr>
                    `;
    });
  });
