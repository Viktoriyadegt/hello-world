//
//Create a parser to interpret and execute the Deadfish language.
//
// Deadfish operates on a single value in memory, which is initially set to 0.
//
// It uses four single-character commands:
//
// i: Increment the value
// d: Decrement the value
// s: Square the value
// o: Output the value to a result array
// All other instructions are no-ops and have no effect.
//======================================================================================================================

function parse(data) {
    const arr = data.split("");
    let finalResult = []
    let res = 0
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === 'i') {
            res++
        } else if (arr[i] === 'd') {
            res--
        } else if (arr[i] === 's') {
            res=res*res
        } else if (arr[i] === 'o') {
            finalResult.push(res)
        }
    }
    return finalResult.length ? finalResult : [];
}


// tests ===============================================================

console.log(parse("iiisxxxdoso")) // [8, 64]
console.log(parse("iiisdosodddddiso")) // [8, 64, 3600]

