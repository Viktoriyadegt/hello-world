
//
// If　a = 1, b = 2, c = 3 ... z = 26
//
// Then l + o + v + e = 54
//
// and f + r + i + e + n + d + s + h + i + p = 108
//
// So friendship is twice as strong as love :-)
//
// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
//
// The input will always be made of only lowercase letters and will never be empty.

//______________________________________________________________________________________________________________________

function wordsToMarks(string) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return string.split('').map(m => alphabet.indexOf(m) + 1).reduce((a, b) => a + b, 0)
}

