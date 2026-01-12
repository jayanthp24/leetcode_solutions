/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = new Map();
    for(let num of nums) {
        if(hash.has(num)) {
            hash.set(num, hash.get(num)+1)
        } else {
            hash.set(num, 1);
        }
    }
    for(let [val, count] of hash) {
        if(count > Math.floor(nums.length/2)) {
            return val;
        }
    }
};