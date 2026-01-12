/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let hash = new Map();
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxVowelCount = 0;
    let maxConsonantCount = 0;
    for (let char of s) {
        if (hash.has(char)) {
            hash.set(char, hash.get(char) + 1);
        } else {
            hash.set(char, 1);
        }
    }

    for(let [val, count] of hash) {
        if(vowels.has(val)) {
            maxVowelCount = Math.max(maxVowelCount, count);
        } else {
            maxConsonantCount = Math.max(maxConsonantCount, count);
        }
    }

    return maxVowelCount + maxConsonantCount;
};