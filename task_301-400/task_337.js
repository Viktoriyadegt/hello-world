//
//Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric
// digits that occur more than once in the input string. The input string can be assumed to contain only alphabets
// (both uppercase and lowercase) and numeric digits.
//

//======================================================================================================================

function duplicateCount(text) {
    const arr = text.toLowerCase().split('')
    let obj = {}
    arr.forEach(i => obj[i] ? obj[i] += 1 : obj[i] = 1)
    return Object.values(obj).filter(f => f > 1).length
}

// tests ===============================================================


console.log(duplicateCount(                "")); // 0
console.log(duplicateCount(           "abcde")); // 0
console.log(duplicateCount(         "aabbcde")); // 2
console.log(duplicateCount(         "aabBcde")); // 2
console.log(duplicateCount(  "Indivisibility")); // 1
console.log(duplicateCount("Indivisibilities")); // 2



