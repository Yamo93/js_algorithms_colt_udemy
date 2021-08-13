function bubbleSort(arr) {
    let noSwaps;
    function swap(arr, idx1, idx2) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
        noSwaps = false;
    }

    for (let i = arr.length; i > 0; i--) {
        // if we didnt swap, then we wont swap again (this optimizes nearly sorted lists).
        noSwaps = true;
        // as i goes down, so does j - thus, we shrink our comparisons
        for (let j = 0; j < i - 1; j++) {
            // we no longer go out of bounds thanks to the (j - 1)
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

bubbleSort([37,45,29,8]);