// Project - Restaurant v1.0
// Create a simple restaurant ordering system. The user should be able to choose from a menu of items (e.g., pizza, burger, salad) and specify the quantity for each item. After the user has finished ordering, display the total cost of the order. Assume each item has a fixed price (e.g., pizza - $10, burger - $5, salad - $7).

function restaurantOrder() {
  const menu = {
    pizza: 10,
    burger: 5,
    salad: 7,
  };
  let totalCost = 0;
  let ordering = true;

  while (ordering) {
    const item = prompt(
      "What would you like to order? (pizza, burger, salad) Type 'done' to finish:",
    );
    if (item === "done") {
      ordering = false;
      break;
    }
    if (menu[item]) {
      const quantity = parseInt(prompt(`How many ${item}s would you like?`));
      totalCost += menu[item] * quantity;
    } else {
      console.log("Sorry, we don't have that item on the menu.");
    }
  }

  console.log(`Your total cost is $${totalCost}. Thank you for your order!`);
}
restaurantOrder();
