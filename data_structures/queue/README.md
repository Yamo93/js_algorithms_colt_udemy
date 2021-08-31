# Queue

## Definition

A queue is a FIFO (First In, First Out) data structure which you add and remove from. It is usually grouped with stacks, because they are similar in the sense that you only perform two operations with them.

## Use cases

Queues exist everywhere. Think of a queue for getting on an airplane. The first person in-line is the first person out.

They are commonly used in software, like waiting for joining a game. Users are added to a queue. Other use cases are background tasks and processes, uploading resources. 

Another example is a print queue. A printer can only handle one thing at a time. Whoever hits "Print" first is going to get processed first.

Queues are useful for processing tasks and are foundational for more complex data structures.

## Implementation

They can be built with an array or a linked list. A linked list implementation is better.

If you implement it with an array and choose to add with `push()`, removal must happen with `shift()`. This also means that removal is less efficient. 

If you choose to add with `unshift()`, removal must happen with `pop()`. With this implementation, addition with `unshift()` becomes less efficient.

We can add from the end and remove from the beginning, or we can add from the beginning and remove from the end. The important thing is to keep it FIFO.

## Time complexity

Insertion - **O(1)**

Deletion - **O(1)**

Searching - **O(N)**

Access - **O(N)**

With queues, you only care about insertion and deletion, which are constant time. Enqueuing and dequeuing with arrays are not constant time.