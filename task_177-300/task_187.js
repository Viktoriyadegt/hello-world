function SeriesSum(n) {
    if (n === 1 || n === 0) {
        return n.toFixed(2)
    }
    let arr = [];
    for (let i = 4; i < (n - 1) * 3 + 4; i += 3) {
        arr.push(1 / i)
    }
    return (1 + arr.reduce((a, b) => a + b)).toFixed(2)
}