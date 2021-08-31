# Stack

A stack is a LIFO data structure, meaning that the last element added to the stack is the first element removed from the stack. It works like a stack of plates. As you pile it up, the topmost thing is what gets removed first.

A stack is more of a concept (Last In, First Out) rather than a specific structure. You can implement it with multiple data structures. A stack can be implemented with a linked list or an array. 

If you use an array, you only need to think about "LIFO". So, if you are adding with `push()`, you need to remove with `pop()`. This is the optimal way if you implement it with an array. Adding and removing from the beginning of an array is not efficient, even though it is completely valid to implement it with `unshift()` and `shift()`.

It is worth mentioning that if you care about efficiency, then you probably don't want to use an array. Since you don't care about indices, but only the last recently added item, then a singly linked list implementation is better.

## Use cases for stacks

1. Managing function invocations (the call stack)
2. Undo / Redo. When you do something, it's added to the stack. When you undo it, it's removed.
3. Routing (the history object) is treated like a stack. Routing in React uses a stack.
4. Some fundamental algorithms in common data structures use stacks to store history.

## Time complexity

Insertion - **O(1)**

Removal - **O(1)**

Searching - **O(N)**

Access - **O(N)**

All that matters are insertion and removal. You only care about pushing to and popping from stacks.