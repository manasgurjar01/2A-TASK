let users = document.querySelector("#users");
let loading = document.querySelector("#loading");
let page = 1;

function loadUsers() {
  loading.style.display = "block";
  fetch(
    "https://jsonplaceholder.typicode.com/users?_page=" + page + "&_limit=5",
  )
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        users.innerHTML += `
                            <div class="user">
                                <h2>${user.name}</h2>
                                <p>${user.email}</p>
                            </div>
                        `;
      });
      page++;
      loading.style.display = "none";
    });
}
loadUsers();

window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    loadUsers();
  }
});
