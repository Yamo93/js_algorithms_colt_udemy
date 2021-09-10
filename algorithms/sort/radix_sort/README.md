# Radix sort

Radix sort is a special sorting algorithm that works on lists of numbers. Radix sort never makes comparisons between elements (i.e. checking if x is greater than y). Instead, it exploits the fact that information about the size of a number is encoded in the number of digits. More digits = bigger number.

We look at each number and place it in a bucket of its first digit from the right. Then, we form them back into a list keeping the order that they are in. Now, their last digits are sorted. Now, we repeat it, but we look at the second digit from the right. One-digit numbers don't have anything, so we put them in the zero bucket. Think of it as "7 == 07".

The number of times we have to do this process depends on the amount of digits in the largest number.

When we are done with the grouping, we form them into the list by adding them from the bottom (because every group will now be sorted).

The number of buckets depends on the base. Since we are using base 10 (0-9), we are using 10 buckets.

In short, radix sort is not a comparison sort, but an integer sort. It utilizes a property about digits instead of making comparisons, and that's why it's faster than comparison sorting algorithms.

## Time and space complexity

The generally accepted Big O notation is this:

> n = amount of integers
> k = number of digits

Long digits can significantly impact the time. This can be better than a comparison sort which is O(n log n), but it depends on how numbers are stored in memory on a computer. If the numbers are distinct, then k has to be at least log n. And then we end up as the same complexity as a comparison sort which is O(n log n). So, if you are dealing with distinct numbers, then it can become O(n log n). In that case, radix sort is equally as good in the average case as a comparison sort. 

But in general, radix sort is O(nk).

### Time complexity (Best):
O(nk)

### Time complexity (Average):
O(nk)

### Time complexity (Worst):
O(nk)

### Space complexity:
O(n + k)
