/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = {};
    let stack = [];

    // For last element, NGE will be -1 always.
    map[nums2[nums2.length - 1]] = -1;
    stack.push(nums2[nums2.length - 1]);

    // Looping from last second element as mapping done for 1st element.
    for (let i = nums2.length - 2; i >= 0; i--) {
        let found = false;
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

        // If there is no next larger element inside stack.
        if (!found) {
            map[nums2[i]] = -1;
            stack.push(nums2[i]);
        }
    }

    return nums1.map(num => map[num]);
};