function binarySearch(sortedArray, value) {
    let start = 0;
    let end = sortedArray.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (sortedArray[middle] !== value && start <= end) {
        if (value < sortedArray[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    if (sortedArray[middle] === value) {
        return middle;
    }
    return -1;
}

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
     5,6,10,13,14,18,30,34,35,37,
     40,44,64,79,84,86,95,96,98,99
 ],10) // 2
binarySearch([
    5,6,10,13,14,18,30,34,35,37,
     40,44,64,79,84,86,95,96,98,99
], 100) // -1