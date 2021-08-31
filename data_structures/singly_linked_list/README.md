# Singly Linked List

A linked list is an ordered data structure that contains a head, tail and length property. Linked Lists consist of nodes, and each node has a value and a pointer to another node or null. We have no indices, so we can't ask "give me the 5th node". We have to search from the beginning.

There are no indices that correspond to each node in the singly linked list. We can't access the 700th node immediately. We have to traverse the list to find it.

When we say index, we don't mean a built-in index. We are manually counting. So it's not as efficient as an array.

An array is like an elevator, you can go to the nth floor. A linked list is like stairs, you can only go one level up from the beginning.

## Time complexity

Insertion at beginning/end: **O(1)**, faster than an array when inserting at beginning/end
Deletion at beginning: **O(1)**
Deletion at end: **O(N)**
Deletion at middle: **O(N)**
Searching: **O(N)**
Access: **O(N)**

* Singly linked lists excel at frequent insertion and deletion.

* Arrays contain a built in index whereas linked lists do not.

* The idea of a list data structure consisting of nodes is the foundation for other data structures like stacks and queues.