//
// Find the missing letter
// Write a method that takes an array of consecutive (increasing)
// letters as input and that returns the missing letter in the array.
//
// You will always get an valid array. And it will be always exactly one letter be missing.
// The length of the array will always be at least 2.
// The array will always contain letters in only one case.

//======================================================================================================================

function findMissingLetter(array) {
    const result = array.map(m=>m.charCodeAt())
    let miss = 0
    for (let i = 0; i <= result.length-1; i++) {
        if (result[i + 1] - result[i] !== 1) {
            miss += result[i]+1
            break
        }
    }

    return String.fromCharCode(miss)
}

// tests ===============================================================

console.log(findMissingLetter(['a','b','c','d','f']))   // 'e'
console.log(findMissingLetter(    ['O','Q','R','S']))   // 'P'


