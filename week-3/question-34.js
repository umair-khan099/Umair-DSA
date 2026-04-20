// Print the unique elements in an array

const arr = [1, 2, 2, 3, 4, 4, 5];

let unique = new Set(arr);

for (let val of unique) {
    console.log(val);
}