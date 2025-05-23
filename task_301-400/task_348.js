//
//The two oldest ages function/method needs to be completed.
// It should take an array of numbers as its argument and return the two highest numbers within the array.
// The returned value should be an array in the format [second oldest age,  oldest age].
//
// The order of the numbers passed in could be any order. The array will always include at least 2 items.
// If there are two or more oldest age, then return both of them in array format.
//======================================================================================================================

function twoOldestAges(ages) {
    const a = ages.sort((a, b) => b - a)
    return [a[1], a[0]]
}


// tests ===============================================================

console.log(twoOldestAges([1, 5, 87, 45, 8, 8])) // [45, 87]
console.log(twoOldestAges([6, 5, 83, 5, 3, 18])) // [18, 83]

