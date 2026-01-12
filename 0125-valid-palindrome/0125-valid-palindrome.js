/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let f = 0;
    let l = s.length - 1;
    while (f < l) {
        if (!s[f].match(/[a-z0-9]/i)) {
            f++;
        } else if (!s[l].match(/[a-z0-9]/i)) {
            l--;
        } else if (s[f] == s[l]) {
            f++;
            l--;
        } else {
            return false;
        }
    }

    return true;
};