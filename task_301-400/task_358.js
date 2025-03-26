// Description:
// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
//
// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.
//
// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.
//======================================================================================================================

function rot13(str) {
    const arr = str.split("");
    let resStr = ''
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i]
        if (/[a-zA-Z]/g.test(n)) {
            const a = n.charCodeAt()
            if ((a > 77 && a < 97) || a > 109) {
                n = String.fromCharCode(a - 13)
            } else {
                n = String.fromCharCode(a + 13)
            }
        }
        resStr += n
    }
    return resStr
}

// tests ===============================================================

console.log(rot13("EBG13 rknzcyr."), "ROT13 example.");
console.log(rot13("This is my first ROT13 excercise!"), "Guvf vf zl svefg EBG13 rkprepvfr!");
console.log(rot13("@[`{"), "@[`{");




