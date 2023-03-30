// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Input: head = [1,2]
// Output: [2,1]

// Input: head = []
// Output: []

function reverseList(head) {
    let prev = null;
    let next = null;
    let curr = head;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = current;
        curr = next;
    }

    return prev;
};

module.exports = reverseList;