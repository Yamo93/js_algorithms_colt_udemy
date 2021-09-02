# Tree

A tree is a data structure that consists of nodes in a parent/child relationship. We end up with these branching structures. A branch can keep splitting, and we end up with branches stemming from the root.

Lists are linear. Trees are not. In trees, there are many paths we can take.

You can think of a singly linked list as a special case of a tree.

If nodes are referencing other nodes that are not children, then it's not a tree. We can't have a child pointing to a parent, or pointing to a sibling. Every node is moving away from the root node. The arrows have to point down.

We can't have two roots in a tree either.

## Tree terminology

**Root**: The top node in the tree.

**Child**: A node directly connected to another node when moving away from the root.

**Parent**: The converse notion of a child.

**Siblings**: A group of nodes with the same parent.

**Leaf**: A node with no children.

**Edge**: The connection between one node and another.

## Uses

Trees are used all the time. Some common examples are:

* **HTML DOM**. We can have nested elements, and it's a parent-child relationship between the elements.

* **JSON**. When you parse the response from a string into JavaScript, there is code that is creating a tree.

* **Network routing**. Routes are delivery schemes for how messages are transmitted through multiple nodes.

* **Abstract syntax trees**. These are ways of describing the syntax of a programming language using a tree structure. If you are writing code to validate code, you can use an abstract syntax tree.

* **Artificial intelligence**. If you want to build a AI for Tic-Tac-Toe, you can break down the logic of the game into a tree. You can say "here's a given state of the board" and after a given move, select the best possible next move...

* **Computer file systems**. Your computer represents the directories as a tree structure.

## Kinds of trees

The different types fit the pattern of a tree, but add in special properties or rules that make them more efficient in a particular way:

1. Trees.

2. Binary trees are a type of tree. In a binary tree, each node can have at most two children. It can have 0-2 children. Trees for 0-3 children are called ternary trees.

3. Binary search trees. The are a special case of a binary tree. They are trees, they at most have 2 children per node. On top of that, they are sorted in a particular order. BSTs are used to store sortable data that can be compared. It could be strings or other pieces of data which can be compared (greater/less).

For each node in a BST, all the items that are less than it are located on the left side, and all the items that are greater than it are located on the right side. 

Every node to the left of a parent node is always less than the parent. Every node to the right of a parent node is always greater than the parent.

## Why are BSTs used?

Their order makes it easy to search through them. So searching in a BST is much quicker than searching in an unsorted binary tree. For every comparison, the number of nodes should be chopped in half. It's the same idea as binary search in a list. Here, we chop the tree in half (as long as the tree is balanced). We don't have to visit every node in the tree.

## Big O of BST

**Insertion**: O(log n)

**Search**: O(log n)

This means log base two of n. O(log n) is good and solid. 

Because the way we keep it sorted, as the tree (number of nodes) doubles, we only increase the number of steps by one.

2x number of nodes: 1 extra step

4x number of nodes: 2 extra steps

O(log n) is very solid, even better than linear time. Only constant time is better than it.

**NOTE**: If we talk about worst case, it's not guaranteed. Some BST configurations are very slow. If a BST is one-sided (like a linked-list), it is a valid BST, but inserting into it is very slow. Consider this:

3 > 17 > 19 > 32 ... The number of steps to insert or search is going to grow as the number of nodes grow, so that would be O(n). The solution to this is to not use a BST in this case.

You could also rewrite the tree and pick 32 as the root, and then search and insertion would be much faster.