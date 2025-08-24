/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let s1 = [];
    let s2 = [];
    for (let char of s) {
        if (char == '#' && s1.length != 0) {
            s1.pop();
        } else if (char != '#') {
            s1.push(char);
        }
    }
    for (let char of t) {
        if (char == '#' && s2.length != 0) {
            s2.pop();
        } else if (char != '#') {
            s2.push(char);
        }
    }

    return s1.join('') === s2.join('');
};