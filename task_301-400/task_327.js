//
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.

//======================================================================================================================

function pigIt(str){
    const arr = str.split(' ')
    let res = []
    for(let i =0; i<=arr.length-1;i++){
        if(!!arr[i].match(/\W/)){
            res.push(arr[i])
        }else{
            res.push(arr[i].slice(1) + arr[i][0] + 'ay')
        }
    }
    return res.join(' ')
}

// tests ===============================================================

console.log(pigIt('Hello world !'))       // 'elloHay orldway !'
console.log(pigIt('Pig latin is cool'))   // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string'))   // 'hisTay siay ymay tringsay'
