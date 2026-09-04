let input = document.querySelector("#input");
let add = document.querySelector("#add");
let list = document.querySelector("#list");

add.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML = input.value;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";

  li.appendChild(deleteBtn);
  list.appendChild(li);

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  input.value = "";
});
