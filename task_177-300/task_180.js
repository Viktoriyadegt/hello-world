function distinct(a) {
    return a.filter((element, index) => {
        return a.indexOf(element) === index
    })
}