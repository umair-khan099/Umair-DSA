// Given an array of even size, task is to find minimum value that can be added to an element so that the array becomes balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of the right half. (Ex: Input : 1 2 1 2 1 3, Output : 2)
// in optimize way 
function minValueToBalanceArray(arr) {
    let n = arr.length;
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < n / 2; i++) {
        leftSum += arr[i];
    }
    for (let i = n / 2; i < n; i++) {
        rightSum += arr[i];
    }
    if (leftSum === rightSum) {
        return 0;
    } else if (leftSum < rightSum) {
        return rightSum - leftSum;
    } else {
        return leftSum - rightSum;
    }
}
// Example usage:
let arr = [1, 2, 1, 2, 1, 3];
console.log(minValueToBalanceArray(arr)); // Output: 2
