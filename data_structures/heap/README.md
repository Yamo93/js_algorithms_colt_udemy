# Heap

Heap is a category of trees. Everything that applies to trees in general applies to heaps. But there are some considerations. There are many types of heaps.

# Binary Heap

## Definition

A binary heap is very similar to a binary search tree, but with some different rules.

In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes - every level down the tree.

Just like a BST, a binary heap can have at most two children. But unlike a BST, the parent is always greatest.

## Max Binary Heap

* Each parent has at most two child nodes

* The value of each parent node is always greater than its child nodes

* In a max binary heap, the parent is greater than the children, but there are no guarantees between sibling nodes.

* A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

## Usage

Binary heaps are used to implement _Priority Queues_ which are very commonly used data structures. Think of a queue where we can also assign a priority (importance level) and it will move to the correct spot depending on its importance level.

They are also used for graph traversal. Heaps are often used to assist with that.

## Storing Heaps

We can build a binary heap with a class. But we can also use the built-in list/array to store a binary heap.

Let's say we store everything in the array: `[100, 19, 36, 17, 12]`

To find the children of 100, it's the next two values. 

Now, if we want to children for 19, then we have to skip over 36 (diagram).

If you have an index for a parent, where are the children located? The parent at 3 has its children at 7 and 8. The parent at 6 has children at 13 and 14.

The mathematical equation is: For any index of an array n, the left child is stored at 2n + 1, and the right child is at 2n + 2.

So, the parent at the index of 6 has its left child at 13 (2 * 6 + 1), and its left child at 14 (2 * 6 + 2).

It works because you have two children for each node.

To work backwards - we have a child node and want to find its parent. The backwards equation is: For any child node at index n, its parent is at index (n-1)/2, we also floor it.

Example: The child at index 10. To find its parent, we subtract one = 9, 9 / 2 = 4.5, so the parent is at index 4.