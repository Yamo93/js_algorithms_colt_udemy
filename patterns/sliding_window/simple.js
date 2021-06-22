function maxSubarraySum(numbers, num) {
    if (num > numbers.length) {
        return null;
    }

    let max = -Infinity;
    // we want to stop just so the num sequence fits as a last iteration
    for (let i = 0; i < numbers.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            // this only sums the num sequence at the current position
            temp += numbers[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null