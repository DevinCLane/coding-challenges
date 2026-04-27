/* 
two sum
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

console.log(twoSumBrute([22, 66, 99, 11], 33), [0, 3])

const twoSumElegant = (nums, target) => {
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const needed = target - current
        const indexOfNeeded = hashMap[needed];
        if (indexOfNeeded != undefined) {
            return [indexOfNeeded, i];
        } else {
            hashMap[current] = i;
        }
    }
}

console.log(twoSumElegant([22, 66, 99, 11], 33), [0, 3])