// Description:
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Constraints:
//
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.
//======================================================================================================================

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    let k = 0
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
            k = nums[i]
            break
        }
    }
    return k
}

// tests ===============================================================

console.log(singleNumber([2, 2, 1]), 1)
console.log(singleNumber([4, 1, 2, 1, 2]), 4)
console.log(singleNumber([1]), 1)
console.log(singleNumber([3, 4, 5, 6, 5, 4, 3]), 6)


