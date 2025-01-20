function positiveSum(arr) {
    return arr.filter(f => f > 0).reduce((a, b) => a + b, 0)
}