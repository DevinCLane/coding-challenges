/* 
Two sum:
Given an array of integers `nums` and a target integer `target,
return an array of indices from `nums` that add up to `target`
*/

const twoSum = (nums, target) => {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const neededValue = target - currentValue;
        const indexOfNeededValue = hash[neededValue];
        if (indexOfNeededValue != undefined) {
            return [indexOfNeededValue, i]
        } else {
            hash[currentValue] = i;
        }
    }
}

console.log(twoSum([6, 1, 8, 9, 15], 14), [0, 2])