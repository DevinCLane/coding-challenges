/* 
Majority Element

Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 
Example 1:
Input: nums = [3,2,3]
Output: 3
Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

https://leetcode.com/problems/majority-element/
*/

function majorityElement(nums) {
    let maxCount = 0;
    let majorityElement = null;
    const map = {};
    for (const num of nums) {
        map[num] = (map[num] ?? 0) + 1;
        if (map[num] > maxCount) {
            maxCount = map[num];
            majorityElement = num;
        }
    }
    return +majorityElement;
}

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);

// boyer-more voting algorithm

/**
 * O(n) time complexity (no improvement over above)
 * O(1) space complexity (improves over above)
 *
 * the majority element appears more than n/2 times
 * if count reaches 0, we pick a new candidate
 * increment count for matching numbers
 * decrement count for non matching numbers
 * @param {number[]} nums
 * @returns {number} - the majority element in the array
 */
function majorityElement2(nums) {
    let count = 0;
    let candidate = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += num === candidate ? 1 : -1;
    }
    return candidate;
}

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
