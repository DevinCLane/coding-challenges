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

const majorityElement = (nums) => {
    const majority = nums.length / 2;
    const numsMap = {};
    for (const num of nums) {
        numsMap[num] = ++numsMap[num] || 1;
        if (numsMap[num] > majority) {
            return num;
        }
    }
    return "not found";
};

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);

const majorityElement2 = (nums) => {
    let maxNum = undefined,
        maxCount = 0;
    const numsMap = {};
    for (const num of nums) {
        numsMap[num] = ++numsMap[num] || 1;
        if (numsMap[num] > maxCount) {
            maxNum = num;
            maxCount = numsMap[num];
        }
    }
    return maxNum;
};

console.log(majorityElement2([3, 2, 3]), 3);
console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2]), 2);
