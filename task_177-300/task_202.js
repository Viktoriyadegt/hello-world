function rowSumOddNumbers(n) {
    let num = 0;
    let arr0 = []
    for (let i = 1; i <= n; i++) {
        num += i
    }
    for (let i = 1; i <= num * 2; i++) {
        if (i % 2)
            arr0.push(i)
    }

    return arr0.slice(-n).reduce((a, b) => a + b)
}
