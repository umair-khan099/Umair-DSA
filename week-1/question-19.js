// Accept a year and check if it a leap year or not (google to find out what's a leap year)

const isLeapYear = (Year) => {
  if ((Year % 4 === 0 && Year % 100 !== 0) || Year % 400 === 0) {
    return `${Year} is a leap Year`;
  } else {
    return `${Year} is not a leap Year`;
  }
};

console.log(isLeapYear(200));
