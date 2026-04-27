/* 
Two sum again

Given an array of integers `nums`, and an integer `target`,
return an array of two indices of `nums` that add up to `target`
*/

const twoSum = (nums, target) => {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const neededValue = target - currentValue;
        const indexOfNeededValue = hash[neededValue];
        if (indexOfNeededValue != undefined) {
            return [indexOfNeededValue, i];
        } else {
            hash[currentValue] = i;
        }
    }
}

console.log(twoSum([1, 3, 4, 7, 9], 4), [0, 1])