/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let commonArray = [];
    for(let num of nums1) {
        if(nums1.includes(num) && nums2.includes(num)) {
            commonArray = [...commonArray, num];
        }
    }
    let uniqueSet = new Set(commonArray);
    return Array.from(uniqueSet);
};