/* 
Two sum

Given an array `nums` and an integer `target
return the indices of `nums` that add up to `target`
*/

const twoSumBrute = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSumBrute([0, 25, 44, 66], 66), [0, 3])

const twoSumElegant = (nums, target) => {
    const hash = {}
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const needed = target - current;
        if (hash[needed] != undefined) {
            return [hash[needed], i];
        } else {
            hash[current] = i;
        }
    }
}

console.log(twoSumElegant([0, 25, 44, 66], 66), [0, 3])
