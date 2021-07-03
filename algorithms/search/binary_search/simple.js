function binarySearch(sortedArray, value) {
    let left = 0;
    let right = sortedArray.length - 1;
    while (left < right) {
        let middle = Math.round((left + right) / 2);
        if (value === sortedArray[middle]) {
            return middle;
        }

        if (value < sortedArray[middle]) {
            right = middle;
        }

        if (value > sortedArray[middle]) {
            left = middle;
        }
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