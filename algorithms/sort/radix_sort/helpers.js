/**
 * This only works with base 10 numbers. 
 * The math is: we divide by the place, then we floor, then we mod 10.
 * 7323/100 = 73
 * 73 % 10 = k: 7, r: 3
 * 
 * It looks at the 2th position from the right.
 */

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

getDigit(7323, 2); // 3

/**
 * Math.log10 (log base 10) = 10 to what power gives us num?
 * Math.log10(423) gives us around 2
 * We need to count the number of digits, and that's why we add 1.
 * Math.abs() is to take negative numbers into account.
 */

function digitCount(num) {
    if (num === 0) return 1; // Math.log10(0) gives negative infinity
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}


digitCount(1); // 1
digitCount(25); // 2
digitCount(314); // 3

/**
 * It doesn't returrn the actual number, it only returns the digit count.
 */
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

mostDigits([1234, 56, 7]); // 4
mostDigits([1, 1, 11111, 1]); // 5
mostDigits([12, 34, 56, 78]); // 2

module.exports = {
    mostDigits,
    digitCount,
    getDigit
};