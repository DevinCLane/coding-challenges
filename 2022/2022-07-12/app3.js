/* 
Recreate twosum again
*/

// brute force
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

// more elegant
const twoSumElegant = (nums, target) => {
    let prevValues = {};
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const neededValue = target - currentValue;
        const indexOfNeededValue = prevValues[neededValue]
        if (indexOfNeededValue != null) {
            return [indexOfNeededValue, i]
        } else {
            prevValues[currentValue] = i;
        }
    }
}

// test cases
console.log(twoSum([3, 6, 8, 9], 9), [0, 1])
console.log(twoSumElegant([3, 6, 8, 9], 9), [0, 1])