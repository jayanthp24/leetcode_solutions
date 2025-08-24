/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let open = new Set(['(', '[', '{']);
    let close = new Set([')', ']', '}']);
    let map = {
        '}' : '{',
        ')' : '(',
        ']' : '['
    };

    for(let char of s) {
        if(open.has(char)) {
            stack.push(char);
        } else if(close.has(char)) {
            let popped = stack.pop();
            if(map[char] != popped) {
                return false;
            }
        }
    }
    return stack.length === 0;
};