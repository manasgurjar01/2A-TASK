let btn = document.querySelector("#btn");
let result = document.querySelector("h2");

btn.addEventListener("click", () => {
  let input = document.querySelector("#input").value;

  let arrval = input.split(",");
  // console.log(arrval);

  let numval = arrval.map((value) => {
    return Number(value);
  });
  // console.log(numval);

  let sortval = numval.sort((a, b) => {
    return a - b;
  });

  console.log(sortval);

  result.innerHTML = ` ${sortval}`;
});
