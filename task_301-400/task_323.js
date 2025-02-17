
//A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits,
// each raised to the power of the number of digits in a given base.
// In this Kata, we will restrict ourselves to decimal (base 10).
// Your code must return true or false (not 'true' and 'false')
// depending upon whether the given number is a Narcissistic number in base 10.
// Error checking for text strings or other invalid inputs is not required,
// only valid positive non-zero integers will be passed into the function.
//======================================================================================================================

function narcissistic(value) {
    const narcis = [...value + '']
    return value === narcis.reduce((a, b) => a +  Math.pow(b, narcis.length), 0)
}


// tests ===============================================================

console.log(narcissistic(7))   // true
console.log(narcissistic(153)) // true
console.log(narcissistic(122)) // false
console.log(narcissistic(487)) // false