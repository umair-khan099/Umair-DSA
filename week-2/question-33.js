// Find the Highest Altitude

function largestAltitude(gain) {
  let maxAltitude = 0;
  let current = 0;

  for (let g of gain) {
    current += g;
    maxAltitude = Math.max(maxAltitude, current);
  }

  return maxAltitude;
}

console.log(largestAltitude([-5, 1, 5, 0, -7]));
