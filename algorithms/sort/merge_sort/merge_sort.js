// time complexity (same for worst, average, best): O(n log n)
// why is it the same? because it doesnt care, it will operate the same way on every possible input

// why is it O(n log n)? if we have 8 items in an array, we need to split it 3 times. 
// if we have 32 items, we need to split it 5 times.
// as N grows to 32, we have 5 splits. when N was 8, we have 3 splits. that's log base 2 of n. (2 of what power gives us n)
// 2 * 2 * 2 = 8

// what about the n? as N grows, the merge algorithm has time complexity of O(n), a linear comparison.

// summary: O(log n) decompositions, O(n) comparisons per decomposition = O(n log n)
// merge: O(n), the merge function has linear complexity
// mergeSort: O(n log n)
// in total: O(n log n)

// space complexity: O(n). we have to use more space than bubble sort which has constant space. 
// but we still care more about time than space.

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    // recursively runs mergeSort, and waits for it to finish
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

let o = mergeSort([9,4,3,2,6,5,7,8,1]);
console.log(o);

function merge(arr1, arr2) {
    let results = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            // push the smallest first
            results.push(arr1[i]);
            // update pointer
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    // if there are leftovers in arr1, add them
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    // if there are leftovers in arr2, add them
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}