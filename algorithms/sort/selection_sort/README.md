# Selection Sort

Selection sort is similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

More precisely, it determines the "minimum" and then places it at the beginning.

When implementing bubble sort, we use the minimum value. This minimum value will not refer to the actual value of the item, but rather the index of it. We only care about positions, we don't care about actual values.

With every iteration, we want to shrink the window of our comparison, because otherwise the minimum would always be set to 1.

## Time complexity
The time complexity of selection sort is O(n*2).

Selection sort is better than bubble sort in one single scenario: if you want to minimize the number of swaps that you are making. In bubble sort, we swap over and over until it goes to the end. In selection sort, we iterate and compare a lot, but we only make one swap at the end of each loop.

So, if we for some reason are worried about doing the swap and writing to memory (which is not very common), then selection sort is better.  But it's not a good algorithm. It's easy though.