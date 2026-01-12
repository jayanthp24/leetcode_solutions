/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = new Map;
    for(let num of nums) {
        if(hash.has(num)) {
            hash.set(num, hash.get(num)+1);
        } else {
            hash.set(num, 1);
        }
    }
    for(let [num, count] of hash) {
        if(count == 1) {
            return num;
        }
    }
};