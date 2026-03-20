// Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))

const greeting = (gender) => {
  if (gender === "mail") {
    return `Good Morning sir`;
  } else if (gender === "femail") {
    return `Good Morning Mam`;
  }else{
    return `Only mail & femail Alow`
  }
};

console.log(greeting("feil"));
