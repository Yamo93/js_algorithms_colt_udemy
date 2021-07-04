/**
 * Two things are improved here:
 * 1) j starts at i+1, not i. 
 * 2) we only do the swap if the minimum was updated (i.e changed from the initial value)
 */

function selectionSort(arr) {
    function swap(arr, idx1, idx2) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
    for (let i = 0; i < arr.length; i++) {
        let minimum = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[minimum]) {
                minimum = j;
            }
        }
        if (i !== minimum) {
            swap(arr, i, minimum)
        };
    }
    return arr;
}

selectionSort([4,2,3,5,1]);