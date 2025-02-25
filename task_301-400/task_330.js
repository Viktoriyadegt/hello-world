//
// The rgb function is incomplete.
// Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
// Valid decimal values for RGB are 0 - 255.
// Any values that fall out of that range must be rounded to the closest valid value.
//
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

//======================================================================================================================

function rgb(r, g, b) {
    const transform = (rgb) => {
        return (rgb < 0 ? 0 : rgb > 255 ? 255 : rgb).toString(16).padStart(2, '0').toUpperCase()
    }
    return transform(r) + transform(g) + transform(b)
}

// tests ===============================================================

console.log(rgb(0, 0, 0))   // '000000'
console.log(rgb(0, 0, -20))   // '000000'
console.log(rgb(300, 255, 255))   // 'FFFFFF'
console.log(rgb(173, 255, 47))   // 'ADFF2F'
console.log(rgb(255, 255, 255))   // "FFFFFF"
console.log(rgb(148, 0, 211))   // "9400D3"


