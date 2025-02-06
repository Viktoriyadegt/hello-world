
//Complete the method which returns the number which is most frequent in the given input array.
// If there is a tie for most frequent number, return the largest number among them.
//
// Note: no empty arrays will be given.
//
// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
//======================================================================================================================

function highestRank(arr) {
    const obj = {}
    for (let i = 0; i <= arr.length - 1; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }
    const objValuesCount = Math.max(...Object.values(obj).sort())
    let highRank = []
    for (let key in obj) {
        if (obj[key] === objValuesCount) {
            highRank.push(+key)
        }
    }
    return highRank.length === 1 ? highRank[0] : Math.max(...highRank)
}


//tests ===============================================================

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])) //12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])) //12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])) //3
console.log(highestRank([6, 6, 12, 21, 30, 14, 29, 26, 26, 28, 28, 18, 22, 5, 5, 10])) //28