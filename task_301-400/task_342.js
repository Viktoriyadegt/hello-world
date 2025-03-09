//
//Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it,
// is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
//
//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet
// (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
//
// Note: your solution must not modify the input array.
//======================================================================================================================

function score(dice) {
    const o = {1: 1000, 6: 600, 5: 500, 4: 400, 3: 300, 2: 200}
    const l = {1: 100, 5: 50}
    let object = {}
    let k = 0
    for (let i = 0; i <= dice.length - 1; i++) {
        object[dice[i]] ? object[dice[i]]++ : object[dice[i]] = 1;
        if (object[dice[i]] === 3) {
            k += o[dice[i]]
            object[dice[i]] = 0
        }
    }
    for (let key in object) {
        if (l[key]) {
            k += l[key] * object[key]
        }
    }
    return k
}

// tests ===============================================================


console.log(score([2, 3, 4, 6, 2])); //    0
console.log(score([4, 4, 4, 3, 3])); //  400
console.log(score([2, 4, 4, 5, 4])); //  450
console.log(score([1, 4, 1, 1, 1])); // 1100




