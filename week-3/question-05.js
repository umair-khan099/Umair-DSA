// Set Matrix Zeroes
function setZeroes(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let rows = new Set();
  let cols = new Set();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (let r of rows) {
    for (let j = 0; j < n; j++) {
      matrix[r][j] = 0;
    }
  }

  for (let c of cols) {
    for (let i = 0; i < m; i++) {
      matrix[i][c] = 0;
    }
  }
}

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroes(matrix);
console.log(matrix);
