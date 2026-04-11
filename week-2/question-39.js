// Transpose Matrix

function transpose(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let result = Array.from({ length: n }, () => Array(m));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
}

console.log(transpose([[1,2,3],[4,5,6]]));