const { pivot } = require('./pivot/pivot_helper');

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