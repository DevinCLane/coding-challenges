/* 
8
169. Majority Element
Easy
Topics
Companies
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 
Example 1:
Input: nums = [3,2,3]
Output: 3
Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
 
Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 
Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

// if an element appears more than n / 2 times, then if we sort and return floor of arr[n / 2]
/**
 * time: O(n log n) - due to sorting the array
 *
 * @param {number[]} nums
 * @returns {number}
 */
function majorityElement(nums) {
    const sorted = nums.sort((a, b) => a - b);
    return sorted[Math.floor(nums.length / 2)];
}

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);

/**
 * time: O(n) where n is the length of the input array
 * space: O(n) where n is the length of the input array to store the hash map
 *
 * @param {number[]} nums
 * @returns {number}
 */
function majorityElement2(nums) {
    // hash map
    const map = {};
    const n = nums.length;
    for (const num of nums) {
        map[num] = (map[num] ?? 0) + 1;
        if (map[num] > n / 2) {
            return num;
        }
    }
}

console.log(majorityElement2([3, 2, 3]), 3);
console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2]), 2);
