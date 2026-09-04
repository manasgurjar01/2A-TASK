let btn = document.querySelector("#btn");
let tableBody = document.querySelector("#table-body");

btn.addEventListener("click", () => {
  let name = document.querySelector("#input-name").value;
  let age = document.querySelector("#input-age").value;

  tableBody.innerHTML += `
                <tr>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>
                        <button class="delete">Delete</button>
                    </td>
                </tr>
            `;
});

tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
