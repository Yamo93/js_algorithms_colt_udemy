# Insertion Sort

Insertion sort is similar to bubble sort and selection sort, but there are some key distinctions in which insertion sort is better. There are scenarios where insertion sort does well.

Insertion sort builds up the sort by gradually creating a larger left portion which is always sorted. It takes each element, and places it where it should go in the sorted portion. So, it looks at the left sorted portion and inserts the current item into where it's supposed to be.

## Time complexity

Worst case scenario: O(n*2), quadratic.
Best case scenario: O(n), linear.

## When is it good?

An online algorithm works as data comes in. So, for example: we have code where people are submitting numbers to us online and live. We want to sort them. With insertion sort, since we are keeping one side of it sorted, it doesn't matter what the number is when it comes in. So, that's one strength with insertion sort: because we keep one side of it sorted, it works well in a situation where data is streaming live and you need to insert it in a moment's notice.