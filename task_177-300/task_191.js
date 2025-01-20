function evenNumbers(array, number) {
    return array.filter(f => f % 2 === 0).slice(-number)
}