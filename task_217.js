function count(string) {
    let countI = {};
    string.split('').forEach((item) => {
        countI[item] ? countI[item]++ : countI[item] = 1
    })
    return countI
}