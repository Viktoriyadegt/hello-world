
//
// Create an identity matrix of the specified size ( >= 0 ).
//
// Some examples:
//
// (1)  =>  [[1]]
//
// (2) => [ [1,0],
//          [0,1] ]
//
//        [ [1,0,0,0,0],
//          [0,1,0,0,0],
// (5) =>   [0,0,1,0,0],
//          [0,0,0,1,0],
//          [0,0,0,0,1] ]
//______________________________________________________________________________________________________________________


function getMatrix(number) {

    let matrix = [];
    for (let i = 1; i <= number; i++) {
        let item = [];
        for (let k = 1; k <= number; k++) {
            if (k === i) {
                item.push(1)
            } else {
                item.push(0)
            }
        }
        matrix.push(item)
    }
    return matrix
}

console.log(getMatrix(5))