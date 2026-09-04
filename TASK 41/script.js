let btn = document.querySelector("#btn");
let p = document.querySelector("#p");

btn.addEventListener("click", () => {
  let otp = Math.floor(Math.random() * 9000) + 1000;

  btn.disabled = true;

  p.innerHTML = "Wait 5 seconds...";

  setTimeout(() => {
    p.innerHTML = `OTP is ${otp}`;

    btn.disabled = false;
  }, 5000);
});
