// Description:
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
// Your task is to process a string with "#" symbols.
//======================================================================================================================

function cleanString(s) {
    const regExp = /[^#]#/g;
    const k = s.split(regExp).join('')
    return regExp.test(k) ? cleanString(k) : k.replace(/#/g, '')
}

// tests ===============================================================

console.log(cleanString("abc#d##c"), "ac");
console.log(cleanString("abc##d######"), "");
console.log(cleanString("#######"), "");
console.log(cleanString(""), "");
console.log(cleanString("abc####d##c#"), "");
console.log(cleanString("a356/##8/####d##c#"), "");




