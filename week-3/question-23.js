// Check distances Between same letters

function checkDistances(s, distance) {
  let firstPos = new Array(26).fill(-1);

  for (let i = 0; i < s.length; i++) {
    let idx = s.charCodeAt(i) - 97; // 'a' = 97

    if (firstPos[idx] === -1) {
      firstPos[idx] = i;
    } else {
      let gap = i - firstPos[idx] - 1;
      if (gap !== distance[idx]) {
        return false;
      }
    }
  }

  return true;
}

// test
console.log(
  checkDistances(
    "abaccb",
    [
      1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ],
  ),
);
