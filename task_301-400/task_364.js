// Description:
// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome!
// To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy,
// and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers,
// because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level -
// 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, g
// iven the parameters of:
//
// your referral bonus, and
//
// the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16
//======================================================================================================================

// Returns number of complete beeramid levels
function beeramid(bonus, price) {

    const countBeer = Math.trunc(bonus / price)
    let count = 0
    let koo = 0
    for (let i = 1; i <= countBeer; i++) {
        koo += i ** 2
        if (koo > countBeer) {
            break
        }
        count += 1
    }
    return count
}

// tests ===============================================================

console.log(beeramid(9, 2), 1);
console.log(beeramid(10, 2), 2);
console.log(beeramid(11, 2), 2);
console.log(beeramid(21, 1.5), 3);
console.log(beeramid(454, 5), 5);
console.log(beeramid(455, 5), 6);
console.log(beeramid(4, 4), 1);
console.log(beeramid(3, 4), 0);
console.log(beeramid(0, 4), 0);
console.log(beeramid(-1, 4), 0);





