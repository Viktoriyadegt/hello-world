
//In this Kata, you will be given a string and your task will be to return a list of
// ints detailing the count of uppercase letters, lowercase, numbers and special characters
// (everything else), as follows.
//
// The order is: uppercase letters, lowercase letters, numbers and special characters.
//
// "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]
// More examples in the test cases.
//
// Good luck!
//======================================================================================================================

function solve(s) {
    let res = [0, 0, 0, 0]
    const arr = s.split('')

    for (let i = 0; i <= arr.length - 1; i++) {

        /[A-Z]/.test(arr[i])
            ? res[0]++
            : /[a-z]/.test(arr[i])
                ? res[1]++
                : /\d/.test(arr[i])
                    ? res[2]++
                    : res[3]++
    }
    return res
}

//tests ===============================================================

console.log(solve("aAbBcC"))  //[3,3,0,0]
console.log(solve("Codewars@codewars123.com"))  //[1,18,3,2]
console.log(solve("bgA5<1d-tOwUZTS8yQ"))  //[7,6,3,2]
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"))  //[9,9,6,9]
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"))  //[15,8,6,9]