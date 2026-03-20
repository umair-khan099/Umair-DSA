// Accept name and age from the user. Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote.
//  Part 2 - Print after how many years the user will be eligible)

const canVote = (name, age) => {
  if (age >= 18) {
    return ` Hello ${name} , Your a valid voter`;
  } else {
    return `Sorry ${name}, You can't cast the vote  , After ${18 - age} Year You can Vote  `;
  }
};

console.log(canVote("umair", 100));
console.log(canVote("khan", 10));
