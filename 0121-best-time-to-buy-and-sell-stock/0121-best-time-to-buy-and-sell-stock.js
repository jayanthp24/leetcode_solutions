/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity;
    let maxProfit = 0;
    for(let price of prices) {
        if(price < min) {
            min = price;
        } else {
            maxProfit = Math.max(maxProfit, price-min);
        }
    }
    return maxProfit;
};