// Accept a number and check if it is a palindromic number (If number and its reverse are equal, Ex: 12321 - Reverse - 12321)

const isPalindromic = (num) => {
  let origional = num;
  let palindromic = 0;

  while (num > 0) {
    let digit = num % 10;
    palindromic = palindromic * 10 + digit;
    num = Math.floor(num / 10);
  }
  if (palindromic == origional) {
    return `${palindromic == origional} ${origional} is a palindromic number`;
  } else {
    return `${palindromic == origional} ${origional} not a palindromic number`;
  }
};

console.log(isPalindromic(12321));
console.log(isPalindromic(126721));
