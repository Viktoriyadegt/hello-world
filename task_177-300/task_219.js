function whoIsPaying(name) {
    return name.length <= 2
        ? [name]
        : [name, name.slice(0, 2)] //substr(0, 2)
}