
//The word i18n is a common abbreviation of internationalization in the developer community,
// used instead of typing the whole word and trying to spell it correctly.
// Similarly, a11y is an abbreviation of accessibility.
//
// Write a function that takes a string and turns any and all "words" (see below)
// within that string of length 4 or greater into an abbreviation, following these rules:
//
// A "word" is a sequence of alphabetical characters.
// By this definition, any other character like a space or hyphen (eg. "elephant-ride")
// will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters,
// then the last letter (eg. "elephant ride" => "e6t r2e").
// Example
// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X
//
// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"
//______________________________________________________________________________________________________________________


function abbreviate(string) {
    const regExp = /\W/g
    const arr = string.split(' ')
    let k = []

    for (let i = 0; i <= arr.length - 1; i++) {
        let n = arr[i].split(regExp)
        let s = []
        for (let b = 0; b <= n.length - 1; b++) {
            if (n[b].length > 3) {
                s.push(n[b][0] + (n[b].length - 2) + n[b][n[b].length - 1])

            } else {
                s.push(n[b])
            }
        }
        k.push(s)
    }
    return k.map((m,i)=>m.join(arr[i].match(/\W/g)?arr[i].match(/\W/g)[0] : '')).join(' ')
}
