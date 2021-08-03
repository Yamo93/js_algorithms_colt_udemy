// merge function which merges two _sorted_ arrays
// complexity: O(n+m) -> each item in each array once

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

merge([1,10,50],[2,14,99,100]);