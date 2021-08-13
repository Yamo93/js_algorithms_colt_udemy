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