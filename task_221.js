function calculator(a, b, sign) {
    if (typeof a === "number" && typeof b === 'number') {
        return sign === '*'
            ? a * b
            : sign === '/'
                ? a / b
                : sign === '+'
                    ? a + b
                    : sign === '-'
                        ? a - b : "unknown value"
    } else {
        return "unknown value"
    }
}