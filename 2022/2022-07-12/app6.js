/* 
Two sum from scratch

Given an array `nums` and a target integer `target`, return the indices
of the array that add up to `target`
*/

const twoSum = (nums, target) => {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const neededValue = target - currentValue;
        const indexOfNeededValue = hash[neededValue]
        if (indexOfNeededValue != undefined) {
            return [indexOfNeededValue, i];
        } else {
            hash[currentValue] = i;
        }
    }
}

console.log(twoSum([2,7,11,15], 9), [0, 1])