/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temps) {
    /*
    Unless like Next Greater Element 1 problem, Here, we store index inside the stack instead of value.
    */
    let stack = [temps.length - 1];
    let res = [0];

    for (let i = temps.length - 2; i >= 0; i--) {
        while (stack.length) {
            if (temps[i] < temps[stack[stack.length - 1]]) {
                let count = stack[stack.length - 1];
                let diff = count - i;
                res.push(diff);
                stack.push(i);
                break;
            } else {
                stack.pop();
            }
        }
        if (!stack.length) {
            res.push(0);
            stack.push(i);
        }
    }

    return res.reverse();
};