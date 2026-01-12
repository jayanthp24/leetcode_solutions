/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let hash = new Map();
    let curr = head;
    while (curr) {
        if (hash.has(curr.val)) {
            hash.set(curr.val, hash.get(curr.val) + 1);
        } else {
            hash.set(curr.val, 1);
        }
        curr = curr.next;
    }

    let dummy = new ListNode();
    let res = dummy;
    for (let [val, count] of hash) {
        if (count == 1) {
            let newNode = new ListNode(val);
            res.next = newNode;
            res = res.next;
        }
    }
    return dummy.next;
};