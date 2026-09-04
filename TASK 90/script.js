let userTable = document.querySelector("#userTable");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())

  .then((data) => {
    data.forEach(function (user) {
      userTable.innerHTML += `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                        </tr>
                    `;
    });
  });
