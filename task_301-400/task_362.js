// Description:
// Write a function that given an integer n >= 0, returns an array of n ascending length subarrays, all filled with 1s.
//
// 0 => [ ]
// 1 => [ [1] ]
// 2 => [ [1], [1, 1] ]
// 3 => [ [1], [1, 1], [1, 1, 1] ]
//======================================================================================================================

function pyramid(n) {
    const arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(Array(i).fill(1))
    }
    return arr
}

// tests ===============================================================

console.log(pyramid(0), [])
console.log(pyramid(1), [[1]])
console.log(pyramid(2), [[1], [1, 1]])
console.log(pyramid(3), [[1], [1, 1], [1, 1, 1]])





