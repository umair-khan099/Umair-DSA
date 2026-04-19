// Calculate Digit Sum of a String

function digitSum(s, k) {
  while (s.length > k) {
    let newStr = "";

    for (let i = 0; i < s.length; i += k) {
      let group = s.slice(i, i + k);

      let sum = 0;
      for (let ch of group) {
        sum += Number(ch);
      }

      newStr += sum.toString();
    }

    s = newStr;
  }

  return s;
}


console.log(digitSum("11111222223", 3));
