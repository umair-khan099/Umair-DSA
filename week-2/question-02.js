// Find the greatest element (Ex: {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index)

const findGreatest = (...num) => {
  let greatest = num[0];
  let index = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > greatest) {
      greatest = num[i];
      index = i;
    }
  }
  return `Max element = ${greatest} found at  ${index} index`;
};

console.log(findGreatest(50, 30, 50, 40, 50, 70));
