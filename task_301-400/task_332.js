//
// Write a function that takes a string of braces, and determines if the order of the braces is valid.
// It should return true if the string is valid, and false if it's invalid.
//
// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}.
// Thanks to @arnedag for the idea!
//
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
//
// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

//======================================================================================================================

function validBraces(braces) {
    const regExt = /\(\)|\{\}|\[\]/g
    if (/[)}\]]/.test(braces[0]) || braces.length % 2) {
        return false
    }
    let res = braces.replace(regExt, "")
    if (regExt.test(res)) {
        return validBraces(res)
    } else {
        return res === ''
    }
}

// tests ===============================================================

console.log(validBraces(           "(}}"))   // false
console.log(validBraces(          "[(])"))   // false
console.log(validBraces(          "()))"))   // false
console.log(validBraces(        "([{}])"))   // true
console.log(validBraces(        "(){}[]"))   // true
console.log(validBraces(     "]}]]))}])"))   // false
console.log(validBraces(    "({})[({})]"))   // true
console.log(validBraces("())({}}{()][]["))   // false


