/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = {};
    let stack = [];
    let res = [];
    for (let i = nums2.length - 1; i >= 0; i--) {
        let found = false;
        if (i == nums2.length - 1) {
            map[nums2[i]] = -1;
            stack.push(nums2[i]);
            continue;
        }
        while (stack.length > 0) {
            if (nums2[i] < stack[stack.length - 1]) {
                map[nums2[i]] = stack[stack.length - 1];
                stack.push(nums2[i]);
                found = true;
                break;
            } else {
                stack.pop();
            }
        }
        if (!found) {
            map[nums2[i]] = -1;
            stack.push(nums2[i]);
        }
    }

    for (let num of nums1) {
        res.push(map[num]);
    }

    return res;
};