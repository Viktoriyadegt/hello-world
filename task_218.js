function billboard(name, price = 30) {
    return name.split('').map(m => price).reduce((a, b) => a + b, 0)
}