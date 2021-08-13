# Quick sort

## Time complexity:


### Best case: O(n log n)

O(log n) decompositions, O(n) comparisons per decomposition with the pivoting
Very similar to merge sort.
 
### Average: O(n log n)

### Worst: O(n2) - quadratic when pivoting at the minimum/maximum, which is the first item:
If the list is sorted, it becomes slow. In each iteration, 
every decomposition only takes one item.
O(n) decompositions, O(n) comparisons per decomposition.

If we're pivoting at a random item though, or in the middle, 
then we can avoid the problem. But the chance is still that we will pick
the minimum.
 
 ## Space complexity:
 
 O(log n)