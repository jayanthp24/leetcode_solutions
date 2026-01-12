/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const nodes = [];
    for (let list of lists) {
        while (list) {
            nodes.push(list.val);
            list = list.next;
        }
    }
    nodes.sort((a, b) => a - b);
    const dummy = new ListNode();
    let current = dummy;
    for (let val of nodes) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
};