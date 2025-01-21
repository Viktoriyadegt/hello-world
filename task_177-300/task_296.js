
// Modify the kebabize function so that it converts a camel case string into a kebab case.
//
// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:
//
// the returned string should only contain lowercase letters
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

