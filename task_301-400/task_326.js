//
// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character
// of the final pair with an underscore ('_').

//======================================================================================================================

function solution(str) {
    let arr = str.length % 2 ? str + '_'.split('') : str.split('')
    let res = []
    for (let i = 0; i <= arr.length - 1; i++) {
        if (i % 2) {
            res[res.length - 1] += arr[i]
        } else {
            res.push(arr[i])
        }
    }
    return res
}

// tests ===============================================================

console.log(solution("abcdef"))   // ["ab", "cd", "ef"]
console.log(solution("abcdefg"))  // ["ab", "cd", "ef", "g_"]
console.log(solution(""))         // []