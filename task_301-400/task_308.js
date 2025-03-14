
//Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters.
// The tension between left side letters and right side letters was too high and the war began.
//
// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight.
// When the left side wins return Left side wins!,
// when the right side wins return Right side wins!,
// in other case return Let's fight again!.
//
// The left side letters and their power:
//
//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:
//
//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.
//______________________________________________________________________________________________________________________

function alphabetWar(fight) {
    const left = {'m': 4, 'q': 3, 'd': 2, 'z': 1}
    const right = {'w': 4, 'p': 3, 'b': 2, 's': 1}
    let l = 0
    let r = 0
    fight.split('').forEach(f => left[f] && (l += left[f]) || right[f] && (r += right[f]))
    return r > l ? "Left side wins!" : l > r ? "Right side wins!" : "Let's fight again!"
}

//tests ===============================================================

console.log(alphabetWar("z"))  // Right side wins!
console.log(alphabetWar("zdqmwpbs"))  //Let's fight again!
console.log(alphabetWar("zzzzs"))  // Right side wins!
console.log( alphabetWar("wwwwww"))  //Left side wins!
console.log(alphabetWar("pldolbtszex")) //Left side wins!

