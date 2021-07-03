/**
 * This is not optimal:
 * 1) we go out of bounds in some iterations
 * 2) we want to shrink the size of the array, because the end is sorted
 */

function bubbleSort(arr) {
    // we nest a loop to iterate over it multiple times
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr);
            if (arr[j] > arr[j+1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([37,45,29,8]);