# Doubly Linked List

A doubly linked list is almost identical to singly linked lists, except every node has another pointer to the previous node.

## Efficiency

A doubly linked list is more efficient than a singly linked list in deletion from the end (pop), since in a singly linked list, you need to traverse the whole list to get to the second-to-last node and make it the new tail, whereas in a doubly linked list, we can access it in constant time since the tail has a pointer to the previous node.

Also, traversing backwards in a singly linked list is painful, since you need to go to the tail first. With a doubly linked list, it's just as easy as going from the beginning. Doubly linked lists can be good for browser history, as you have both the prev and next pointers.

The drawback is that it takes more memory. More memory means more flexibility. There are almost always tradeoffs in programming.

## Time complexity

Insertion: **O(1)** - just like singly linked lists (beginning and end), unlike an array.

Removal: **O(1)** - always constant (both at beginning and end), unlike singly linked lists.

Searching: **O(N)** - slightly faster than singly linked lists, since the optimized solution is more like O(N / 2), but it still simplifies to O(N), if it grows.

Access: **O(N)**