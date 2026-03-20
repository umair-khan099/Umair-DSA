// Accept an integer and check whether it is an even number or odd.

const checkEvenodd = (integer) => {
  if (integer % 2 == 0) {
    return `${integer} is Even`;
  } else {
    return `${integer} is odd`;
  }
};

console.log(checkEvenodd(0));
