// Accept a day number between 1-7 and print the corresponding day name.

const dayName = (day) => {
  switch (day) {
    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invaild day";
  }
};

console.log(dayName(1))
console.log(dayName(2))
console.log(dayName(3))
console.log(dayName(4))
console.log(dayName(5))
console.log(dayName(6))
console.log(dayName(7))
console.log(dayName(8))