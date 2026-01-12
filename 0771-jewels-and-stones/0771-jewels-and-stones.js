/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let res = 0;
    let jewelsSet = new Set(jewels.split(''));
    for (let i = 0; i < stones.length; i++) {
        if(jewelsSet.has(stones[i])) {
            res++;
        }
    }
    return res;
};