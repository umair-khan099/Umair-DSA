// Best Time to Buy and Sell Stock (Hint - Kadane's Algo)

function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - minPrice;

        maxProfit = Math.max(maxProfit, profit);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));