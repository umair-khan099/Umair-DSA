// Find surface area of sphere

const surfaceAreaOfSphere = (radius) => {
  let area = 4 * Math.PI * Math.pow(radius, 2);
  return area.toFixed(2);
};

console.log(surfaceAreaOfSphere(7));
