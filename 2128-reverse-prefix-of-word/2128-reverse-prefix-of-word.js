/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    if(!word.includes(ch)) return word;
    let stack = [];
    let res = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] != ch) {
            stack.push(word[i]);
        } else {
            res += word[i];
            while (stack.length > 0) {
                res += stack.pop();
            }
            res += word.slice(i + 1);
            break;
        }
    }
    return res;
};