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

// sort the array
// return the floor of arr.length / 2

/**
 * time: O(n log n) where n is the length of the array (sorting creates the log n)
 * space: O(1) depends on how the new array is created
 *
 * @param {number[]} arr
 * @returns {number}
 */
function majorityElement(arr) {
    const n = arr.length;
    const sorted = arr.sort((a, b) => a - b);
    return sorted[Math.floor(n / 2)];
}

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);

// hash map
// if maxcount > arr.length / 2, that's the majority element
/**
 * time: O(n) where n is the length of the array
 * space: O(n) where n is the length of the input array to store the hash map
 *
 * @param {number[]} arr
 * @returns {number}
 */
function majorityElement2(arr) {
    const map = {};
    for (const num of arr) {
        map[num] = (map[num] ?? 0) + 1;
        if (map[num] > arr.length / 2) {
            return num;
        }
    }
    return -1;
}

console.log(majorityElement2([3, 2, 3]), 3);
console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2]), 2);

// boyer moore voting algorithm

/**
 * because the majority element appears n / 2 times, if we count it as +1 and everything else as -1, the sum will be positive
 * we keep a running count and a candidate, and reset it when the count is 0
 *
 * time: O(n) where n is the length of the input array
 * space: O(1) : no new data structures needed. this is the optimzation over the other approaches
 * @param {number[]} nums
 * @returns {number}
 */
function majorityElement3(nums) {
    // keep track of our candidate
    let candidate = null;
    // count
    let count = 0;
    for (const num of nums) {
        // if count becomes 0, that means we can reset num to be the candidate
        if (count === 0) {
            candidate = num;
        }
        // if num is the candidate, positive number, otherwise subtract 1
        count += num === candidate ? 1 : -1;
    }
    // this is our majority element
    return candidate;
}
