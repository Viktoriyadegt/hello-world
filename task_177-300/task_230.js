//
//  Given an array of numbers, check if any of the numbers are the character
//  codes for lower case vowels (a, e, i, o, u).
//  If they are, change the array value to a string of that vowel.
//  Return the resulting array.
//
//
//
//______________________________________________________________________________________________________________________


function isVow(a) {
    const array = ['a', 'e', 'i', 'o', 'u']
    let arrayNew = []
    for (let i = 0; i <= a.length - 1; i++) {
        if (array.includes(String.fromCharCode(a[i]))) {
            arrayNew.push(String.fromCharCode(a[i]))
        } else {
            arrayNew.push(a[i])
        }
    }
    return arrayNew
}