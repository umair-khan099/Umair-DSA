// Find the second greatest element (Ex: {2, 96, 69, 77, 145, 20} = Second greatest element = 96)

const findSecGreatest = (...num) => {
  if (num.length < 2) {
    return "Second greatest does not exist";
  }
  let greatest = num[0];
  let secondGreatest = greatest;
  for (let i = 0; i < num.length; i++) {
    let current = num[i];
    if (current > greatest) {
      secondGreatest = greatest;
      greatest = current;
    }
    if (current < greatest && secondGreatest < current) {
      secondGreatest = current;
    }
  }
  return `Second greatest element ${secondGreatest}`;
};

console.log(findSecGreatest(2, 20, 3, 69, 77, 145, 96, 100));
