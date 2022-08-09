/* 
Two sum
*/

const twoSumBrute = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        // made a mistake here and said if i < nums.length. needs to be j < nums.length
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSumBrute([46, 33, 20, 2], 22), [2, 3])

const twoSumElegant = (nums, target) => {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const neededValue = target - currentValue;
        const indexOfNeededValue = hashMap[neededValue]
        if (indexOfNeededValue != undefined) {
            return [indexOfNeededValue, i];
        } else {
            hashMap[currentValue] = i;
        }
    }
}

console.log(twoSumElegant([33, 66, 1, 5], 71), [1, 3])