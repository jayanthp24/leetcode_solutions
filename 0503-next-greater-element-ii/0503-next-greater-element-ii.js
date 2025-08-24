/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums2) {
    let res = [];
    let stack = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        let found = false;
        while (stack.length > 0) {
            if (nums2[i] < stack[stack.length - 1]) {
                res.push(stack[stack.length - 1]);
                stack.push(nums2[i]);
                found = true;
                break;
            } else {
                stack.pop();
            }
        }

        // If there is no next larger element inside stack.
        // We start looking in array from start till current element.
        if (!found) {
            for (let j = 0; j < i; j++) {
                if (nums2[j] > nums2[i]) {
                    res.push(nums2[j]);
                    stack.push(nums2[i]);
                    found = true;
                    break;
                }
            }
        }
        // If no greater element at all.
        if (!found) {
            res.push(-1);
            stack.push(nums2[i]);
        }
    }

    return res.reverse();
};