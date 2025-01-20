function longest(s1, s2) {
    let arr = (s1 + s2).split('')
    return [...new Set(arr)].sort().join('')
}