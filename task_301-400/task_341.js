//
//Complete the function scramble(str1, str2)
// that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
// Notes:
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
//======================================================================================================================


function scramble(str1, str2) {
    let arr1 = str1.split('')
    let arr2 = str2.split('')
    let o = {}
    let m = {}
    let res = true

    for (let i = 0; i <= arr2.length - 1; i++) {
        o[arr2[i]] ? o[arr2[i]] += 1 : o[arr2[i]] = 1
    }
    for (let i = 0; i <= arr1.length - 1; i++) {
        if (o[arr1[i]] && m[arr1[i]]) {
            m[arr1[i]] += 1
        }
        if (o[arr1[i]] && !m[arr1[i]]) {
            m[arr1[i]] = 1
        }
    }
    for (let key in o) {
        if (!(m[key] && m[key] >= o[key])) {
            res = false
            break
        }
    }

    return res
}

// tests ===============================================================


console.log(scramble(             'rkqodlw', 'world')); // true
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // true
console.log(scramble(               'katas', 'steak')); // false
console.log(scramble(     'scriptjavx', 'javascript')); // false
console.log(scramble(  'scriptingjava', 'javascript')); // true
console.log(scramble(   'scriptsjava', 'javascripts')); // true
console.log(scramble(     'javscripts', 'javascript')); // false
console.log(scramble(       'jscripts', 'javascript')); // false
console.log(scramble(    'aabbcamaomsccdd', 'commas')); // true
console.log(scramble(             'commas', 'commas')); // true
console.log(scramble(             'sammoc', 'commas')); // true



