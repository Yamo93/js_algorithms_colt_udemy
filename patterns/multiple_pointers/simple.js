function countUniqueValues(numbers) {
    let firstPointer, secondPointer;
    const uniqueValues = [];
for (let i = 0; i < numbers.length; i++) {
    firstPointer = i;
    secondPointer = i+1;
    if (numbers[firstPointer] !== numbers[secondPointer]) {
        uniqueValues.push(numbers[firstPointer]);
    }
}
return uniqueValues.length;
}

// time: O(n)
// space: O(n)

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4