let SequenceSum = (function () {
    function SequenceSum() {
    }

    SequenceSum.showSequence = function (count) {


        if (count <= 0) {
            return count === 0
                ? '0=0'
                : `${count}<0`
        } else {
            let numArr = [];
            let sum = 0
            for (let i = 0; i <= count; i++) {
                numArr.push(i)
                sum += i
            }
            return numArr.join('+') + ` = ${sum}`
        }
    }

    return SequenceSum;

})();