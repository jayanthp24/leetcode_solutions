/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let hash = new Map();
    for (let i = 0; i < s.length; i++) {
        if (hash.has(s[i])) {
            hash.set(s[i], hash.get(s[i]) + 1);
        } else {
            hash.set(s[i], 1);
        }
    }

    for (let [val, count] of hash) {
        if (count == 1) {
            return s.indexOf(val);
        }
    }
    return -1;
};