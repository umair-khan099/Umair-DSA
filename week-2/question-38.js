// Matrix Diagonal Sum 

function diagonalSum(mat) {
  let n = mat.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += mat[i][i];                
    sum += mat[i][n - i - 1];        
  }

  if (n % 2 === 1) {
    sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
  }

  return sum;
}

console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]));