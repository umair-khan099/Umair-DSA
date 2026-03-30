// Move all the negative elements on the left side and positive elements on the right side O(n).

let array = [-1, 2, 3, 1, 0, -9, 9, 4, -10];
// array.sort((a, b) => a - b);

let start = 0;
let end = array.length - 1;

while (start <= end) {
  if (array[start] < 0) {
    start++;
  } else if (array[end] >= 0) {
    end--;
  } else {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}

console.log(array);
