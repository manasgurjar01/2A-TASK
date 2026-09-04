function checkPalindrome(str) {
  let reverse = str.split("").reverse().join("");

  if (str === reverse) {
    console.log(`${str} is Palindrome`);
  } else {
    console.log(`${str} is Not Palindrome`);
  }
}

checkPalindrome("madam");
