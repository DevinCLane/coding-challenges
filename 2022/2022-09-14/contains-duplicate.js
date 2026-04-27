/* 
Solve Contains Duplicate: 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 
Example 1:
Input: nums = [1,2,3,1]
Output: true
Example 2:
Input: nums = [1,2,3,4]
Output: false
Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

// brute force. works but not super efficient
const twoSum = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true
            }
        }
    }
    return false;
}

console.log(twoSum([2, 5, 6, 4, 1]), false)
console.log(twoSum([2, 5, 6, 4, 1, 1]), true)

// if we sort the array first, we're likely to get to true quicker.
const twoSumSort = arr => {
    arr.sort();
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true
            }
        }
    }
    return false;
}

console.log(twoSumSort([2, 5, 6, 4, 1]), false)
console.log(twoSumSort([2, 5, 6, 4, 1, 1]), true)

// create a set from the array
// if the set size !== the array length, that means that the array is longer, which means there are duplicate members of the array, thus we return false.
const twoSumWithSet = arr => {
    const set = new Set(arr);
    console.log(set)
    return set.size !== arr.length
}

console.log(twoSumWithSet([2, 5, 6, 4, 1]), false)
console.log(twoSumWithSet([2, 5, 6, 4, 1, 1]), true)