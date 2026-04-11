// Determine Whether Matrix Can Be Obtained By Rotation

function findRotation(mat, target) {
  for (let i = 0; i < 4; i++) {
    if (isEqual(mat, target)) return true;
    mat = rotate(mat);
  }
  return false;
}

function rotate(matrix) {
  let n = matrix.length;
  let res = Array.from({ length: n }, () => Array(n));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res[j][n - i - 1] = matrix[i][j];
    }
  }

  return res;
}

function isEqual(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i][j] !== b[i][j]) return false;
    }
  }
  return true;
}

console.log(findRotation(
  [[0,1],[1,0]],
  [[1,0],[0,1]]
));