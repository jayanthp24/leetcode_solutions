/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // Finding the middle element
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let middle = slow;

    // Reverse the second half of list
    let prev = null;
    let curr = middle;
    while(curr) {
        let temp = curr.next
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    let secondHead = prev;

    // Checking for palindrome
    let firstList = head;
    let secondList = secondHead;
    while(secondList) {
        if(firstList.val != secondList.val) {
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next;
    }
    return true;
};