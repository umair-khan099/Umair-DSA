// Accept the User's name, age and print in following manner (Ex - Hello Shery, you are 12 years old.)

let user = (fname, age) => {
  let greeting = `Hello ${fname} , you are ${age} years old`;
  return greeting;
};

console.log(user("umair", 20));
