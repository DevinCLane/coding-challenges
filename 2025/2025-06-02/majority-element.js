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

// hash map
function majorityElement(nums) {
    const map = {};
    // max count
    let maxCount = 0;
    // maxChar
    let maxChar = null;
    // loop over array
    for (const num of nums) {
        // if element is in hash map, incremenent count
        map[num] = (map[num] ?? 0) + 1;
        // if count > max count
        if (map[num] > maxCount) {
            // update count
            maxCount = map[num];
            // update max char
            maxChar = num;
        }
    }
    // return max char
    return maxChar;
}
console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
