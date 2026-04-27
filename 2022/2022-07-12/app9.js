/* 
Two sum
*/

const twoSum = (nums, target) => {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const neededValue = target - currentValue;
        if (hash[neededValue] != undefined) {
            return [hash[neededValue], i];
        } else {
            hash[currentValue] = i;
        }
    } 
}

console.log(twoSum([1, 3, 5, 7, 11, 13], 18), [3, 4])