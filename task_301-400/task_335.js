//
//Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order
// of the strings of a1 which are substrings of strings of a2.
//Example 1:
// a1 = ["arp", "live", "strong"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns ["arp", "live", "strong"]
//
// Example 2:
// a1 = ["tarp", "mice", "bull"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns []
//
// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

//======================================================================================================================


function inArray(array1, array2) {
    let arr = []
    const str = array2.join(' ')
    for(let i =0; i <= array1.length; i++){
        if(str.includes(array1[i])){
            arr.push(array1[i])
        }
    }
    return arr.sort()
}

// tests ===============================================================

a2 = ["lived", "alive", "harp", "sharp", "armstrong"]

a1   =  ["xyz", "live", "strong"]
a11  =  ["live", "strong", "arp"]
a111 =  ["tarp", "mice", "bull" ]

array1 = ['live','strong','lyal','lysh','arp']
array2 = ['lively','alive','harp','sharp','armstrong']

console.log(inArray(  a1, a2))       // ["live", "strong"]
console.log(inArray( a11, a2))       // ["arp", "live", "strong"]
console.log(inArray(a111, a2))       // []
console.log(inArray(array1, array2)) // [ 'arp', 'live', 'strong' ]



