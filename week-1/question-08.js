// Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

const CompoundIntrest = (
  PrincipalAmount,
  AnualIntrest,
  compounded,
  TimeInYear,
) => {
  let finalAmount =
    PrincipalAmount *
    Math.pow(1 + AnualIntrest / 100 / compounded, compounded * TimeInYear);

  let CompoundIntrest = finalAmount - PrincipalAmount;

  return { finalAmount, CompoundIntrest };
};

console.log(CompoundIntrest(10000, 10, 2, 2));
