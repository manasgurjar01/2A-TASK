// Map
let arr1 = [1, 2, 3, 4, 5];

let result1 = arr1.map((value) => {
  return value * 5;
});
console.log(result1);

// Filter
let arr2 = [10, 20, 30, 40, 50];

let result2 = arr2.filter((value) => {
  return value >= 30;
});
console.log(result2);

// Reduce
let arr3 = [100, 200, 300, 400, 500];
let result3 = arr3.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(result3);
