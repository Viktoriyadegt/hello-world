function remove(string) {
    return string.split('').filter(f => f !== '!').join('') + '!'
}