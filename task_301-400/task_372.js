//ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X,
// to indicate a value of 10.
//
// An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.
//
// For example:
//
// ISBN     : 1 1 1 2 2 2 3 3 3  9
// position : 1 2 3 4 5 6 7 8 9 10
// This is a valid ISBN, because:
//
// (1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0
//=======================================

function validISBN10(isbn) {
    const regExp = /^[0-9]{9}[0-9X]$/
    if (!regExp.test(isbn)) {
        return false
    }
    let isValid = 0
    for (let i = 0; i < isbn.length; i++) {
        if (i === isbn.length - 1 && isbn[i] === 'X') {
            isValid += 100
        } else {
            isValid += isbn[i] * (i + 1)
        }
    }
    return isValid % 11 === 0
}

console.log(validISBN10("1112223339" ), true)
console.log(validISBN10("048665088X" ), true)
console.log(validISBN10("1293000000" ), true)
console.log(validISBN10("1234554321" ), true)
console.log(validISBN10("1234512345" ), false)
console.log(validISBN10("1293"       ), false)
console.log(validISBN10("X123456788" ), false)
console.log(validISBN10("ABCDEFGHIJ" ), false)
console.log(validISBN10("XXXXXXXXXX" ), false)
console.log(validISBN10("048665088XZ"), false)
console.log(validISBN10("1112223339" ), true)