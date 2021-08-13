# Bubble Sort

> The elementary sorting algorithms are: bubble sort, selection sort and insertion sort.
> They are commonly less used, because they are less efficient. But one of them 
> performs very well if the list is nearly sorted.

The bubble sort is: checking two items and swapping if the first is greater than the second. At the end of the first loop, the greatest value will have "bubbled" to the top.

In bubble sort, after each complete loop, one value will be solidified and sorted (the greatest value). This also means that the size of the unsorted array will shrink with each loop, so our loops should reflect that.

# Time complexity

In general, it's O(n*2): because of the nested loop.
The best case scenario (nearly sorted): it's more like O(n).
