// Description:
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// You can return the answer in any order.
// Constraints:
//
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
//
//
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
//======================================================================================================================

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const sum = []
    for (let i = 0; i < nums.length; i++) {
        let b = nums.indexOf(target - nums[i], i+1)
        if(b !== -1){
            sum.push(i, b)
            break
        }
    }
    return sum
};

// tests ===============================================================

console.log(twoSum([2, 7, 11, 15], 9), [0, 1])
console.log(twoSum([3, 2, 4], 6), [1, 2])
console.log(twoSum([3, 3], 6), [0, 1])


