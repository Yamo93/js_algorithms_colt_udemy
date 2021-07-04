function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];

        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            // while current is smaller, shift all items to right to make space for current
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current; // we set the current to the empty position (remember that j is decremented)
    }
    return arr;
}
insertionSort([2,1,9,76,4]);