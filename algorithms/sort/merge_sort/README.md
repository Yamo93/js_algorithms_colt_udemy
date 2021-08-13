# Time Complexity (same for worst, average, best): O(n log n)
Why is it the same? Because it doesn't care, it will operate the same way on every possible input.

Why is it O(n log n)? If we have 8 items in an array, we need to split it 3 times. 
If we have 32 items, we need to split it 5 times.
As  N grows to 32, we have 5 splits. When N was 8, we have 3 splits. That's log base 2 of n. (2 of what power gives us n)
2 * 2 * 2 = 8

What about the n? As N grows, the merge algorithm has time complexity of O(n), a linear comparison.

Summary: O(log n) decompositions, O(n) comparisons per decomposition = O(n log n)
`merge`: O(n), the merge function has linear complexity
`mergeSort`: O(n log n)
In total: O(n log n)

# Space complexity: O(n)
We have to use more space than bubble sort which has constant space. But we still care more about time than space.