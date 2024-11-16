function findLongest(array) {
    let Length = array.map((num) => num.toString().length)
    let index = Length.indexOf(Math.max(...Length))
    return array[index]
}