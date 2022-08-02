/* 
Recreate twosum from scratch

Prompt:

Given a target number, and an array of numbers, return the indices of two values in nums such that
they add up to the target.
*/

const twoSum = (nums, target) => {
    let prevValues = {};
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const neededValue = target - currentValue
        const indexOfNeededValue = prevValues[neededValue]
        // we need to check if the indexOfNeededValue exists
        // not if the current value exists.
        // why?
        if (indexOfNeededValue != null) {
            return [indexOfNeededValue, i];
        } else {
            prevValues[currentValue] = i;
        }
    }
}

// test cases
console.log(twoSum([2,7,11,15], 9), [0, 1])
