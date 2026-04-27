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

// run a count of occurrences of each number - hash map
// once a number is greater than n/2 return it

/**
 * time: O(n) where n is the length of the input array
 *  - iterate through the array once, and each hash map operation is O(1)
 * space: O(n) where n is the length of the input array
 *  - worst case scenario we could store refs to each distinct element in the hash map
 */
function majorityElement(nums: number[]) {
    const map: Record<string, number> = {};
    for (const num of nums) {
        map[num] = (map[num] ?? 0) + 1;
        if (map[num] > nums.length / 2) {
            return num;
        }
    }
}

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);

/**
 * boyer-moore voting algorithm
 * space: O(1) because we only keep track of candidate and count, no matter the size of the input
 */
function majorityElement2(nums: number[]) {
    let candidate = null;
    let count = 0;
    for (const num of nums) {
        // if the count is 0, candidate becomes the current value
        // this also happens when the count goes to 0 across the loop, updating a new candidate
        if (count === 0) {
            candidate = num;
        }

        // add to the count
        // if the candidate === num, increase the count, otherwise decrease the count
        count += candidate === num ? 1 : -1;
    }
    return candidate;
}

console.log(majorityElement2([3, 2, 3]), 3);
console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2]), 2);
