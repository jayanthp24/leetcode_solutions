/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let operators = new Set(['+', '-', '*', '/']);
    let stack = [];
    for (let token of tokens) {
        if (!operators.has(token)) {
            stack.push(parseInt(token))
        } else {
            let b = stack.pop();
            let a = stack.pop();
            let res = calculate(a, b, token);
            stack.push(res);
        }
    }
    return stack.pop();
};

var calculate = function (a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': let div = a / b;
            return div < 0 ? Math.ceil(div) : Math.floor(div);
        default: return NaN;
    }
}