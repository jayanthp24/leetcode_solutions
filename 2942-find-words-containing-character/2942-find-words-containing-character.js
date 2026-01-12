/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let wordIndeces = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let n = word.length;
        for (let j = 0; j < n; j++) {
            if (word[j] == x) {
                wordIndeces.push(i);
                break;
            }
        }
    }
    return wordIndeces;
};