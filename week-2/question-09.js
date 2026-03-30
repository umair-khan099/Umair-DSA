// Linear Search an array - If element found print the index, else -1
let array = [10, 20, 30, 40, 50, 60];
let target = 50;
let found = false;
for (let i = 0; i < array.length; i++) {
  if (array[i] === target) {
    console.log(` on ${i} index`);
    found = true;
    break;
  }
}
if (!found) {
  console.log(-1);
}
