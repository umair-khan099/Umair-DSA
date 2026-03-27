// Array left rotation by K elements

let array = [1, 2, 3, 4, 5];

let k = 2;

k = k % array.length;


let digits = [];
for (let i = 0; i < k; i++) {
  digits.push(array[i]);
}

for (let i = 0; i < array.length - k; i++) {
  array[i] = array[i + k];
}

for (let i = 0; i < k; i++) {
  array[array.length - k + i] = digits[i];
}
console.log(array);

// let first = array.shift();
// let second = array.shift(array[1]);

// array.push(first);
// array.push(second);
// console.log(array);
