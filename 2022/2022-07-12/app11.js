/* 
Two sum
*/

const twoSum = (nums, target) => {
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

console.log(twoSum([20, 69, 2, 5, 99], 104), [3, 4])