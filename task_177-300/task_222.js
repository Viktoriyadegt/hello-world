    function sumOfDifferences(arr) {

        if (arr.length <= 1) {
            return 0
        } else {
            let arrSorted = arr.sort((a, b) => b - a)
            let sum = 0;
            for (let i = 0; i < arrSorted.length - 1; i++) {
                sum += arrSorted[i] - arrSorted[i + 1]
            }
            return sum
        }
    }