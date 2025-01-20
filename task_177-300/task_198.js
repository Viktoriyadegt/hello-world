    function sumDigPow(a, b) {

        let arr1 = []
        for (let i = a; i <= b; i++) {
            arr1.push(i)
        }
        let arr = []
        for (let i = a; i <= b; i++) {
            arr.push(i.toString().split('').map((m, index) => Number(m) ** (index + 1)))
        }
        let arrSum = arr.map(m => m.reduce((a, b) => a + b))

        let result = []
        for (let i = 0; i <= arrSum.length - 1; i++) {
            if (arrSum[i] === arr1[i]) {
                result.push(arrSum[i])
            }
        }

        return result
    }