function countUniqueValues(numbers) {
    let firstPointer = 0;
    if (!numbers.length) {
        // if the array is empty, there are no unique values
        return firstPointer;
    }
    for (let secondPointer = 1; secondPointer < numbers.length; secondPointer++) {
        if (numbers[firstPointer] !== numbers[secondPointer]) {
            // if the value is unique, we move the first pointer one step
            firstPointer++;
            // the array is updated with the unique values
            numbers[firstPointer] = numbers[secondPointer];
        }
    }
    return firstPointer + 1; // its position will stop at the last index of the unique values
}

// time: O(n)
// space: O(1)

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4