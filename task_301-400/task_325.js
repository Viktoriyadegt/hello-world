//
// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

//======================================================================================================================

function moveZeros(arr) {
    const res1 = arr.filter(n => n !== 0);
    const res2 = arr.filter(n => n === 0);

    return [...res1, ...res2]
}

// tests ===============================================================

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))     // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // [false,1,1,2,1,3,"a",0,0]