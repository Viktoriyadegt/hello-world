//
//The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
//
// Here's the deal:
//
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

//======================================================================================================================


function generateHashtag(str) {
    const arr = str.split(' ').filter(f => f)
    if (!arr.length) {
        return false
    }
    const res = arr.map(e => e[0].toUpperCase() + e.slice(1)).join('')
    return res.length >= 140 ? false : '#' + res
}

// tests ===============================================================

console.log(generateHashtag(""))                                        // false
console.log(generateHashtag(" ".repeat(200)))                         // false
console.log(generateHashtag("Do We have A Hashtag"))                    // "#DoWeHaveAHashtag"
console.log(generateHashtag("Codewars"))                                // "#Codewars"
console.log(generateHashtag("Codewars Is Nice"))                        // "#CodewarsIsNice"
console.log(generateHashtag("Codewars is nice"))                        // "#CodewarsIsNice"
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))   // "#CodeWars"
console.log(generateHashtag("Loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" +
    "ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")) //  false

