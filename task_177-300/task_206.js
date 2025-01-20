let encryptThis = function (text) {
    let g = []
    let arr = text.split(' ')
    for (let i = 0; i < arr.length; i++) {
        g.push(' ')
        let localArr = arr[i].split('')
        for (let i = 0; i < localArr.length; i++) {
            if (i === 0) {
                g.push(localArr[i].charCodeAt(0))
            } else if (i === 1) {
                g.push(localArr[localArr.length - 1])
            } else if (i === localArr.length - 1) {
                g.push(localArr[1])
            } else {
                g.push(localArr[i])
            }
        }
    }

    return g.join('').trim()
}