/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let nodes = [];
    let curr = head;
    while (curr) {
        nodes.push(curr);
        curr = curr.next;
    }

    let start = 0;
    let end = nodes.length - 1;
    let newNode = new ListNode();
    let dummy = newNode;
    while (start <= end) {
        if (start == end) {
            dummy.next =nodes[start];
            dummy = dummy.next;
            break;
        } else {
            dummy.next = nodes[start];
            dummy = dummy.next;
            start++;

            dummy.next = nodes[end];
            dummy = dummy.next;
            end--;
        }
    }

    dummy.next = null;

    return newNode.next;
};