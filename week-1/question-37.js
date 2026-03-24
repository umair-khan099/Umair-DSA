// Make a choice based calculator using do while

const claculator = (a, b) => {
  let choice = 2;
  do {
    if (choice == 1) {
      console.log(a + b);
    } else if (choice == 2) {
      console.log(a - b);
    } else if (choice == 3) {
      console.log(a * b);
    } else if (choice == 4) {
      console.log(a / b);
    } else {
      console.log("Invalid choice");
    }

    choice = 0;
  } while (choice == 1);
};

claculator(2, 4);
