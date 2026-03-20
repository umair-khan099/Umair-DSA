// Accept the three sides of triangle and calculate the area using Heron's formula

const AreaofTriangle = (a, b, c) => {
  let s = (a + b + c) / 2;
  let areaoftreiangle = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(areaoftreiangle);
};

AreaofTriangle(3, 4, 5);
