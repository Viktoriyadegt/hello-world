
//A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
// For example, 25 is an automorphic number because its square (625) ends with 25.
//
// Task
//
// Given a positive number, determine if it is Automorphic or not.
// If it is, return "Automorphic", otherwise return "Not!!"
//______________________________________________________________________________________________________________________

//function all( arr, fun ) {
// return arr.every(fun)
// }

function kebabize(str) {
    let resStr = ''
    const arr = str.split('')
    for (let i = 0; i <= arr.length - 1; i++) {
        if (!isNaN(+arr[i])) {
            resStr += ''
        } else {
            if (arr[i].toUpperCase() === arr[i] && i !== 0) {
                resStr += '-' + arr[i]
            } else {
                resStr += arr[i]
            }
        }
    }
    return resStr.toLowerCase()
}

