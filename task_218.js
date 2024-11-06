function billboard(name, price = 30) {
    return name.split('').map(() => price).reduce((a, b) => a + b, 0)
}