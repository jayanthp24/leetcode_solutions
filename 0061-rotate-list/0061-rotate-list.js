/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    // Corner cases.
    if (!head || !head.next || k == 0) return head;
    let curr = curr2 = head;

    // Finding length of list.
    let size = 0;
    while (curr) {
        size++;
        curr = curr.next;
    }

    // If the size is 5 and k is 12
    // Then doing it only for 12%5 = 2 is needed.
    // As every size time the list becomes same.
    k = k % size;

    if (size == k || k == 0) return head;

    let slow = fast = curr2;

    // Move fst pointer k steps ahead.
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    // Move fast and slow simultaneously till f reaches last element
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // Unlink slow node, Attach fast pointer to current head and Make slow.next node as head.
    let temp = slow.next;
    slow.next = null;
    fast.next = head;
    head = temp;
    return head;
};