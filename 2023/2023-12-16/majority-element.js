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
// return the element that occurs the most
// hash map
// create variable for the majority element
// create variable for majority threshold: nums.length / 2
// create variable for the number of occurences

const majorityElement = (nums) => {
    // create a hash map
    const numsMap = {};
    // create an object that sounds the occurences of each element
    for (const num of nums) {
        numsMap[num] = ++numsMap[num] || 1;
    }
    // simply return the element that occurs the most.
    return +Object.keys(numsMap).sort((a, b) => numsMap[b] - numsMap[a])[0];
};

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);

const majorityElement2 = (nums) => {
    // create a hash map
    const numsMap = {};
    let maxNum;
    let maxCount = 0;
    // create an object that sounds the occurences of each element
    for (const num of nums) {
        numsMap[num] = ++numsMap[num] || 1;
    }

    for (const num in numsMap) {
        if (numsMap[num] > maxCount) {
            maxCount = numsMap[num];
            maxNum = num;
        }
    }
    return +maxNum;
    // simply return the element that occurs the most.
};

console.log(majorityElement2([3, 2, 3]), 3);
console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2]), 2);

const majorityElement3 = (nums) => {
    // create a hash map
    const numsMap = {};
    // create an object that sounds the occurences of each element
    for (const num of nums) {
        numsMap[num] = ++numsMap[num] || 1;
        if (numsMap[num] > nums.length / 2) {
            return +num;
        }
    }
    // simply return the element that occurs the most.
};

console.log(majorityElement3([3, 2, 3]), 3);
console.log(majorityElement3([2, 2, 1, 1, 1, 2, 2]), 2);
