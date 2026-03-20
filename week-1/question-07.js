// Accept the length and width of a rectangle. Calculate & print the area and perimeter.

const areaOfRectangle = (len, wid) => {
  let Area = len * wid;
  let perimeter = 2 * (len + wid);
  return `Area of a rectangle with length of ${len} and width of ${wid} is ${Area} cm2 and perimeter is ${perimeter}cm`;
};

console.log(areaOfRectangle(8, 3));
