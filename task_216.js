function sumMul(n, m) {
    if (m <= 0) {
        return "INVALID"
    } else {
        let sum = []
        for (let i=n; i < m; i += n) {
            sum.push(i)
        }
        return sum.reduce((a,b)=>a+b)
    }

}