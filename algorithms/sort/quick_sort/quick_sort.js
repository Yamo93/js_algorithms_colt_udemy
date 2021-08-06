const { pivot } = require('./pivot/pivot_helper');

/**
 * Time complexity:
 * Best case: O(n log n)
 *      O(log n) decompositions, O(n) comparisons per decomposition with the pivoting
 *      Very similar to merge sort.
 * 
 * Average: O(n log n)
 * Worst: O(n2) - quadratic when pivoting at the minimum/maximum, which is the first item:
 *      If the list is sorted, it becomes slow. In each iteration, 
 *      every decomposition only takes one item.
 *      O(n) decompositions, O(n) comparisons per decomposition.
 *      
 *      If we're pivoting at a random item though, or in the middle, 
 *      then we can avoid the problem. But the chance is still that we will pick
 *      the minimum.
 * 
 * Space complexity:
 * O(log n)
 */
function quickSort(arr, left = 0, right = arr.length-1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right); //3
        // left side
        quickSort(arr, left, pivotIndex-1);
        // right side
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}

const o = quickSort([100,-3,2,4,6,9,1,2,5,3]);
console.log(o);