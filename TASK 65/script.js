let btn = document.querySelector("#btn");
let toast = document.querySelector("#toast");

btn.addEventListener("click", () => {
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
});
