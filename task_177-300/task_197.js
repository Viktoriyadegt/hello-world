function findNb(m) {

    let k = 0
    let count = 0
    for (let i = 1; ; i++) {
        k += i * i * i
        count += 1
        if (k >= m) {
            break
        }
    }
    return k === m ? count : (-1);
}