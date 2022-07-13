/* 
Can you recreate two sum without looking at your notes from yesterday?
*/

const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }
}

// enact a more efficient solution

const twoSumEfficient = (arr, target) => {
    const prevValues = {}
    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i]
        const neededValue = target - currentValue
        index2 = prevValues[neededValue]
        if (index2 != null) {
            return [index2, i]
        } else {
            prevValues[currentValue] = i
        }

    }
}


// test cases

console.log(twoSum([0, 2, 1, 5], 6), [2, 3])
console.log(twoSumEfficient([0, 2, 1, 5], 6), [2, 3])