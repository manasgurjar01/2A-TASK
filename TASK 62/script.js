let mobile = document.querySelector("#mobile");
let laptop = document.querySelector("#laptop");
let mouse = document.querySelector("#mouse");
let cart = document.querySelector("#cart");
let total = document.querySelector("#total");
let sum = 0;

mobile.addEventListener("click", () => {
  cart.innerHTML += "Mobile - &#8377; 50000 <br>";
  sum = sum + 50000;
  total.innerHTML = "Total: &#8377;" + sum;
});

laptop.addEventListener("click", () => {
  cart.innerHTML += "Laptop - &#8377; 60000 <br>";
  sum = sum + 60000;
  total.innerHTML = "Total: &#8377;" + sum;
});

mouse.addEventListener("click", () => {
  cart.innerHTML += "Mouse - &#8377; 1000 <br>";
  sum = sum + 1000;
  total.innerHTML = "Total: &#8377;" + sum;
});
