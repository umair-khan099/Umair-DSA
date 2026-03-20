// Find circumference and area of circle

const radiusOfCircle = (radius) => {
  let Circumference = 2 * Math.PI * radius;
  let Area = Math.PI * Math.pow(radius, 2);
  return {
    Circumference: Circumference.toFixed(2),
    Area: Area.toFixed(2),
  };
};

console.log(radiusOfCircle(7));
