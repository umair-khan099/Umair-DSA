// Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.

// 1.st Approch without prompt
const average = (...num) => {
  if (num.length == 0) return 0;
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum / num.length;
};

console.log(average(40, 66, 77, 40, 88, 75, 90));

// 2nd Approch
// const avrage = (n) => {
//   let arr = [];
//   let sum = 0;
//   while (arr.length < n) {
//     let digit = Number(prompt(""));
//     arr.push(digit);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / n;
// };

// console.log(avrage(5));
