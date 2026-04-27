// twosum
/* 
given an array nums and an integer target, 
return two indices of array such that they add up to target
*/

// brute force
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([60, 55, 23, 9], 69), [0, 3])

// more elegant
const twoSumElegant = (nums, target) => {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const neededValue = target - currentValue;
        const indexOfNeededValue = hashMap[neededValue];
        if (indexOfNeededValue != undefined) {
            return [indexOfNeededValue, i];
        } else {
            hashMap[currentValue] = i;
        }
    }
}

console.log(twoSumElegant([33, 19, 102], 135), [0, 2])