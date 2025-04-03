// Description:
// The drawing below gives an idea of how to cut a given "true" rectangle into squares
// ("true" rectangle meaning that the two dimensions are different).

// Can you translate this drawing into an algorithm?
//
// You will be given two dimensions
//
// a positive integer length
// a positive integer width
// You will return a collection or a string (depending on the language; Shell bash, PowerShell,
// Pascal and Fortran return a string) with the size of each of the squares.
//
// Examples in general form:
// (depending on the language)
//
//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]
//
//   You can see examples for your language in **"SAMPLE TESTS".**

// When the initial parameters are so that lng == wdth,
// the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case,
// return None/nil/null/Nothing or return {} with C++, [] with Perl, Raku.
//
// In that case the returned structure of C will have its sz component equal to 0.
//
// Return the string "nil" with Bash, PowerShell, Pascal and Fortran.
//======================================================================================================================

function sqInRect(lng, wdth, res = []) {
    if (lng === wdth && !res.length) {
        return null
    }

    lng < wdth? res.push(lng): res.push(wdth)

    if (lng === wdth) {
        return res
    }

    if (res[res.length - 1] !== 0) {
        return sqInRect(res[res.length - 1], Math.abs(lng - wdth), res)
    }
    return res
}

// tests ===============================================================

console.log(sqInRect(5, 5), null)
console.log(sqInRect(5, 3), [3, 2, 1, 1])
console.log(sqInRect(3, 5), [3, 2, 1, 1])
console.log(sqInRect(20, 14), [14, 6, 6, 2, 2, 2])




