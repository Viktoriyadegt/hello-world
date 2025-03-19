// Description:
// Given a lowercase string that has alphabetic characters only and no spaces,
// return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
//
// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
//
// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia c"
//
// "zodiac" -> 26
// The consonant substrings are: "z", "d" and "c" with values "z" = 26, "d" = 4 and "c" = 3. The highest is 26
//======================================================================================================================

function solve(s) {
    const arr = s.split(/[aoiue]/g);
    let a = 0
    for (let i = 0; i <= arr.length - 1; i++) {
        let j = arr[i].split('').reduce((a, b) => a + b.charCodeAt() - '`'.charCodeAt(), 0)
        j > a && (a = j)
    }
    return a
}

// tests ===============================================================

console.log(solve(          "zodiac"), 26);
console.log(solve(   "chruschtschov"), 80);
console.log(solve(      "khrushchev"), 38);
console.log(solve(        "strength"), 57);
console.log(solve(     "catchphrase"), 73);
console.log(solve(  "twelfthstreet"), 103);
console.log(solve("mischtschenkoana"), 80);
console.log(solve(              "az"), 26);

