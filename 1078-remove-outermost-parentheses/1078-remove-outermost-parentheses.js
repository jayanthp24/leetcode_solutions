/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let stack = [];
    let res = '';
    for (let char of s) {
        if (char === '(') {
            if (stack.length > 0) {
                res = res + char;
            }
            stack.push(char);
        } else {
            stack.pop();
            if (stack.length > 0) {
                res = res + char;
            }
        }
    }
    return res;
};