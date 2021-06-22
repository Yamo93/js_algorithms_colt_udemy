/**
we dont have to check the entire chunks every time we move a step.
we can just remove one from the beginning, and add one to the end, 
and thats a sliding window [ ] [] [  ]...
to slide it over, we dont recalculate everything, 
we just subtract the first number, and add the last number
*/

function maxSubarraySum(numbers, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (numbers.length < num) {
        return null;
    }

    for (let i = 0; i < num; i++) {
        maxSum += numbers[i];
    }
    tempSum = maxSum;
    for (let i = num; i < numbers.length; i++) {
        tempSum = tempSum - numbers[i - num] + numbers[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// time: O(n)

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null