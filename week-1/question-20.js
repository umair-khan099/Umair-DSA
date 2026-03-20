// Shop discount

const discount = (price) => {
  if (price >= 1000) {
    let discounte = 20;
    let discountedAmount = (price * discounte) / 100;
    finalAmount = price - discountedAmount;
    return `You get ${discounte}% of Discount You have to pay just ${finalAmount}`;
  } else if (price >= 501) {
    let discounte = 10;
    let discountedAmount = (price * discounte) / 100;
    finalAmount = price - discountedAmount;
    return `You get ${discounte}% of Discount You have to pay just ${finalAmount}`;
  } else {
    return `No discount on ${price} for discount buy $ ${501 - price}  more of product`;
  }
};

console.log(discount(1000));
