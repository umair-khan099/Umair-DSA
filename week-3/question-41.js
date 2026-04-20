// Squares of a Sorted Array

function sortedSquares(nums) {
    let n = nums.length;
    let result = new Array(n);

    let left = 0;
    let right = n - 1;
    let i = n - 1;

    while (left <= right) {
        let leftSq = nums[left] * nums[left];
        let rightSq = nums[right] * nums[right];

        if (leftSq > rightSq) {
            result[i] = leftSq;
            left++;
        } else {
            result[i] = rightSq;
            right--;
        }
        i--;
    }

    return result;
}

console.log(sortedSquares([-4,-1,0,3,10]));