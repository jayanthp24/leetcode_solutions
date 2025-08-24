/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let stack = [];
    for (let char of s) {
        if (stack.length === 0) {
            stack.push(char);
            continue;
        }

        let top = stack[stack.length - 1];
        if (top + char === "AB" || top + char === "CD") {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length;
};