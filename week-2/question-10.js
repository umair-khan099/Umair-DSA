// Binary Search. If element found print the index, else -1

let array = [3, 9, 7, 12, 10, 5, 24];
array.sort((a, b) => a - b);
// console.log(array)


let find = 12;
let start = 0;
let end = array.length - 1;
// console.log(end);

while (start <= end) {
  let middle = Math.floor((start + end) / 2);
  if (array[middle] == find) {
    console.log(middle);
    break;
  } else if (array[middle] > find) {
    end = middle - 1;
  } else {
    start = middle + 1;
  }
}

if (start > end) {
  console.log(-1);
}
