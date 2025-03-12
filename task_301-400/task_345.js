//
//Given a string s consisting only of characters a, b and c.
//
// Return the number of substrings containing at least one occurrence of all these characters a, b and c.
// Example 1:
//
// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c
// are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).
// Constraints:
//
// 3 <= s.length <= 5 x 10^4
// s only consists of a, b or c characters.
//======================================================================================================================

const numberOfSubstrings = function (s) {
    const arr = s.split('')
    const regExp = /(?=.*a)(?=.*b)(?=.*c)/
    let str = ''
    let count = 0
    for (let i = 0; i <= arr.length - 3; i++) {
        str = s.slice(i, i + 3)
        if (regExp.test(str)) {
            count++
        }
        for (let k = i + 3; k <= arr.length - 1; k++) {
            str = str + arr[k]
            if (regExp.test(str)) {
                count++
            }
        }
    }
    return count
}

// tests ===============================================================

    console.log(numberOfSubstrings('abcabc')) // 10
    console.log(numberOfSubstrings('aaacb')) // 3
    console.log(numberOfSubstrings('abc')) // 1

