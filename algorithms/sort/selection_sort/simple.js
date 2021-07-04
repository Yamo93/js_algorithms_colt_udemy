function selectionSort(arr) {

    function swap(arr, idx1, idx2) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    for (let i = 0; i < arr.length; i++) {
        let minimum = i;

        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minimum]) {
                minimum = j;
            }
        }

        swap(arr, i, minimum);
    }

    return arr;
}

selectionSort([4,2,3,5,1]);