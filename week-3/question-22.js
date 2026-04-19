// Strong Password Checker II

function strongPasswordCheckerII(password) {
  if (password.length < 8) return false;

  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;
  let hasSpecial = false;

  let special = "!@#$%^&*()-+";

  for (let i = 0; i < password.length; i++) {
    let ch = password[i];

    // check adjacent same
    if (i > 0 && ch === password[i - 1]) {
      return false;
    }

    if (ch >= "a" && ch <= "z") hasLower = true;
    else if (ch >= "A" && ch <= "Z") hasUpper = true;
    else if (ch >= "0" && ch <= "9") hasDigit = true;
    else if (special.includes(ch)) hasSpecial = true;
  }

  return hasLower && hasUpper && hasDigit && hasSpecial;
}


console.log(strongPasswordCheckerII("Ilove09Sheriyans!")); 
console.log(strongPasswordCheckerII("aaAA11!!")); 
