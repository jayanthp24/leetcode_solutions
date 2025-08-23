/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let stack = [];
    for (let i = 0; i < prices.length; i++) {
        let push = true;
        for (j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                stack.push(prices[i] - prices[j]);
                push = false;
                break;
            }
        }
        if (push) {
            stack.push(prices[i]);
        }
    }
    return stack;
};