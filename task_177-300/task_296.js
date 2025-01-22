

// Modify the kebabize function so that it converts a camel case string into a kebab case.
//
// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:
//
// the returned string should only contain lowercase letters
//______________________________________________________________________________________________________________________


// const automorphic = n => String(n*n).endsWith(String(n)) ? "Automorphic" : "Not!!" ;

function automorphic(n) {
    return n === +[...n * n + ''].slice(-[...n + ''].length).join('')
        ? "Automorphic"
        : "Not!!"
}

