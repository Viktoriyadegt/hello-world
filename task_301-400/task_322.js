//Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
//======================================================================================================================

function toCamelCase(str) {
    return str
        .split(/[\W_]/g)
        .map((s, i) => i ? s[0].toUpperCase() + s.slice(1) : s)
        .join('')
}

//tests ===============================================================

console.log(toCamelCase(''))                    // ''
console.log(toCamelCase("the_stealth_warrior")) // "theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")) // "TheStealthWarrior"
console.log(toCamelCase("A-B-C"))               // "ABC"