const middleNode = (head) => {
    let fast = (slow = head);
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
