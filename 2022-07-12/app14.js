/* 
TwoSum

given an array of intengers nums and a target integer target
return an array of indices of nums such that they add up to target
*/

const twoSumBrute = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSumBrute([55, 77, 1, 99, 5], 6), [2, 4])

const twoSumElegant = (nums, target) => {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const needed = target - current;
        if (hashMap[needed] != undefined) {
            return [hashMap[needed], i];
        } else {
            hashMap[current] = i;
        }
    }
}

console.log(twoSumElegant([55, 77, 1, 99, 5], 6), [2, 4])
