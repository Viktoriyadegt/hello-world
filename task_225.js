let greet = function (name) {
    let nameArray = name.split('').map((m, index) => index === 0 ? m.toUpperCase() : m.toLowerCase()).join('')
    return `Hello ${nameArray}!`
};