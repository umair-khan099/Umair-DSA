// Array left Rotation by 1

// 1st method
let array = [1, 2, 3, 4, 5];
let digit = array[0];
for (let i = 0; i < array.length - 1; i++) {
  array[i] = array[i + 1];
}
array[array.length - 1] = digit;
console.log(array);

// 2nd method

// let first = arr.shift();
//  arr.push(first);
// console.log(arr);
