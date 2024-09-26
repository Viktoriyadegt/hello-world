function getCount(str) {

    let vowels = ['a', 'e', 'i', 'o', 'u']
    let array = str.trim().split('')
    let result = array.filter(elem => vowels.includes(elem));
    return result.length
}


console.log(getCount('o a kak ushakov lil vo kashu kakao'))