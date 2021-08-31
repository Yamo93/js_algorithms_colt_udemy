# Sliding Window

The sliding window pattern involves creating a window (array or  a number from one position to another). This window will increase or close (and open a new window) depending on a certain condition.

This helps with tracking subsets of data in an array or a string. Like checking: "which pair of numbers next to each other sum up to the greatest amount in an array".

# maxSubarraySum

Write a function called maxSubarraySum which accepts an array of integers (not necessarily sorted) and a number called **n**. The function should calculate the maximum sum of **n** consecutive elements in the array.

## Examples:
```js
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
```