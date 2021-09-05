# Tree Traversal

# Breadth-first Search

Breadth-first Search (BFS) means that we want to visit every node on a given level before we look at the child. We want to visit all the siblings before we look at the children. We are working horizontally.

## Implementation

1. Create a helper queue (it can be an array). We also create a variable to store the value of visited nodes.
2. Place the root node in the queue.
3. Loop as long as there is anything in the queue.
4. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
5. If there is a left property on the node dequeued, add it to the queue.
6. If there is a right property on the node dequeued, add it to the queue.

We finish each level. We create the queue to remember the things that need to come next. We are not visiting them next, we are waiting to visit them until we finish a horizontal level - hence, breadth-first search!

# Depth-first Search

All the DFS algorithms visit nodes vertically down to the end of a tree before visiting sibling nodes. We will traverse down until we hit the end of the tree.

## Types of DFS

### 1. DFS - PreOrder

Pre-Order means that you will visit the node first. Then, we look at the entire left side. Then, we traverse the right. That's true for any node.

### DFS - PreOrder Implementation (Recursively)

1. Create a variable to store the values of visited nodes.
2. Store the root of the BST in a variable called current.
3. Write a helper function which accepts a node:

* Push the value of the node to the variable that stores the values.
* If the node has a left property, call the helper function with the left property on the node.
* If the node has a right property, call the helper function with the right property on the node.

4. Invoke the helper function with the `current` variable.
5. Return the array of values. 

### 2. DFS - PostOrder

With PostOrder, we visit the node after we have visited everything else. In PostOrder, we start at 10, but we don't visit it, we look at the left and right branches, and then we visit it at the end. The root node is the last thing that is visited. For any node, we visit all the children before we visit the node.

Practically, it means that you just have to change the order of the PreOrder solution.


### DFS - PostOrder Implementation (Recursively)

1. Create a variable to store the values of visited nodes.
2. Store the root of the BST in a variable called current.
3. Write a helper function which accepts a node:

* If the node has a left property, call the helper function with the left property on the node.

* If the node has a right property, call the helper function with the right property on the node.

* Push the value of the node to the variable that stores the values.

4. Invoke the helper function with the `current` variable.
5. Return the array of values. 

### 2. DFS - InOrder

With InOrder, we traverse the entire left side. Then we visit the node. Then we traverse the entire right side.

### DFS - InOrder Implementation (Recursively)

1. Create a variable to store the values of visited nodes.
2. Store the root of the BST in a variable called current.
3. Write a helper function which accepts a node:

* If the node has a left property, call the helper function with the left property on the node.

* Push the value of the node to the variable that stores the values.

* If the node has a right property, call the helper function with the right property on the node.


4. Invoke the helper function with the `current` variable.
5. Return the array of values.

# Time and space complexity

## Time complexity

The time complexity of BFS vs DFS are the same, we are visiting the same amount of nodes.

## Space complexity

It depends on the tree. If the tree is fully fleshed out and is as wide as it can be, remember that we have this queue which stores all the children. Our queue grows and stores a bunch of nodes. By the time we are done with a height of hundred levels down, we will have to store a ton of data in the queue. 

But in terms of space complexity, BFS can be expensive if the tree is wide.

On DFS, we don't store all the nodes across the tree. We only keep track of the nodes in a given branch. With this approach, we are using the call stack. For a wide tree, DFS would use less space.

If the tree is unbalanced and has few nodes, BFS would be better.

# Potential use cases

Why would you use a given DFS algorithm (PreOrder, PostOrder and InOrder) over another? There are no super clear use cases, but two examples are:

**Example 1**:

The time complexity of BFS vs DFS are the same, we are visiting the same amount of nodes: when you use InOrder in a BST, when we get the data back, we get it in order. Basically, we get it sorted. You will end up with the set of the nodes in their order.

**Example 2**: 
With PreOrder, we get (10, 6, 3, 8, 15, 20). This can be useful if you want to clone or duplicate a tree, or flatten it out to store it in a file or a database, and then recreate it from that serialized structure. 

With InOrder, reconstructing the tree wouldn't be that easy.