/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let temp = 0;
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] == "L" ? temp++ : temp--;
        if (temp == 0) {
            res++;
        }
    }
    return res;
};