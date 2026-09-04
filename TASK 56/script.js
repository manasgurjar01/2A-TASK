let btn = document.querySelector("#btn");
let password = document.querySelector("#input-pass");

btn.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    btn.innerHTML = "Hide";
  } else {
    password.type = "password";
    btn.innerHTML = "Show";
  }
});
