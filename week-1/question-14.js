// Extend the previous program and handle the wrong inputs. Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.

const greeting = (gender) => {
  if (gender === "M" || gender === "m") {
    return `Good Morning Sir`;
  } else if (gender === "F" || gender === "f") {
    return `Good Morning Ma'am`;
  } else {
    return `Wrong Input.`;
  }
};

console.log(greeting("M"));
