// // Bijli Bill

// ⚡ Rules:
// Energy Charges (slab-wise):
// 0–100 units → ₹5 per unit
// 101–200 units → ₹7 per unit
// 201–300 units → ₹10 per unit
// 300+ units → ₹12 per unit

const bijliBill = (units) => {
  if (units <= 0) {
    return `Unvalid Input `;
  } else if (units <= 100) {
    return units * 5;
  } else if (units >= 100 && units <= 200) {
    return units * 7;
  } else if (units >= 200 && units <= 300) {
    return units * 10;
  } else {
    return units * 12;
  }
};

console.log(bijliBill(0));
