// Description:
// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer.
// You don't need to validate the form of the Roman numeral.
//
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately,
// starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC)
// and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII).
// The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Courtesy of rosettacode.org
//======================================================================================================================

function solution(roman) {
    const obj = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    const arr = roman.split('').map(m => obj[m])
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            res[res.length - 1] += arr[i]
        } else {
            if (arr[i] > res[res.length - 1]) {
                res[res.length - 1] *= -1
            }
            res.push(arr[i])
        }
    }
    return res.reduce((a, b) => a + b, 0)
}

// tests ===============================================================

console.log(solution('XXI'), 21);
console.log(solution('I'), 1);
console.log(solution('IV'), 4);
console.log(solution('MMVIII'), 2008);
console.log(solution('MDCLXVI'), 1666);




