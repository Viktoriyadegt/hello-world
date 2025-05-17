//
// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
// Constraints:
//
// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.
//======================================================================================================================

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits
        }
        digits[i] = 0
    }
    return [1, ...digits]   //test
};


//test =================================================================================================================

console.log(plusOne([1, 2, 3]), [1, 2, 4])
console.log(plusOne([4, 3, 2, 1]), [4, 3, 2, 2])
console.log(plusOne([9]), [1, 0])
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]),
                          [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4])

//problems =============================================================================================================

//❌ В чём главная проблема?
// ➡️ Преобразование строки в число (+num) ломает точность при больших числах.
// В JavaScript есть ограничение точности чисел:
// Number.MAX_SAFE_INTEGER === 9007199254740991
// Это значит, любое число длиннее примерно 16–17 цифр уже может быть искажено.
