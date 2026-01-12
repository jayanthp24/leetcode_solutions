/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;

    let fast = sentinel;
    let slow = sentinel;

    for(let i=0; i<= n; i++) {
        fast = fast.next;
    };

    while(fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return sentinel.next;
};