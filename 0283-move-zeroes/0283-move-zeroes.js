/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let lastNonZero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap current element with the last non-zero position
            [nums[lastNonZero], nums[i]] = [nums[i], nums[lastNonZero]];
            lastNonZero++;
        }
    }
}