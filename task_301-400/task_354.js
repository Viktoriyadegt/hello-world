// Description:
// Given a list of integers and a single sum value,
// return the first two values (parse from the left please) in order of appearance that add up to form the sum.
//
// If there are two or more pairs with the required sum,
// the pair whose second element has the smallest index is the solution.
//
// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]
//
// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]
// Negative numbers and duplicate numbers can and will appear.
//
// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
//======================================================================================================================

function sumPairs(ints, s) {
    let seen = new Set(); // Храним просмотренные числа

    for (let num of ints) {
        let diff = s - num;

        if (seen.has(diff)) {
            return [diff, num]; // Возвращаем найденную пару
        }

        seen.add(num);
    }

    return undefined; // Если пары нет
}

// tests ===============================================================

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7]);
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6]);
console.log(sumPairs([20, -13, 40], -7), undefined);
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1]);
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7]);
console.log(sumPairs([4, -2, 3, 3, 4], 8), [4, 4]);
console.log(sumPairs([0, 2, 0], 0), [0, 0]);
console.log(sumPairs([5, 9, 13, -3], 10), [13, -3]);

