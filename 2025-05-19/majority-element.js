/* 
169. Majority Element

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

// create a hash map
// keep track of majority element
// count ocurrences of each number
// on each iteration, if the count is larger than majority element, update majority element
// return majority element when you're done

function majorityElement(nums) {
    const map = {};
    let majorityElement = null;
    let maxCount = 0;
    for (const num of nums) {
        /* 
        map[num] = (map[num] ?? 0) + 1
        */

        if (map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
        if (map[num] > maxCount) {
            maxCount = map[num];
            majorityElement = num;
        }
    }
    return majorityElement;
}

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);

function majorityElement2(nums) {
    const map = new Map();
    let maxCount = 0;
    let majorityElement = null;
    for (const num of nums) {
        const currentCount = (map.get(num) ?? 0) + 1;
        map.set(num, currentCount);

        if (currentCount > maxCount) {
            maxCount = currentCount;
            majorityElement = num;
        }
    }
    return majorityElement;
}
