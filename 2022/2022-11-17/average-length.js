/* 
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

    If the average length is not an integer, use Math.round().
    The input array's length > 1


*/

const averageLength = arr => {
    // get the length of each string, add to our sum
    const sum = arr.reduce((a, c) => a + c.length, 0)
    // get average = sum / # of elements in the array
    const averageRounded = Math.round(sum / arr.length)
    // found it easier to create a new array rather than mutate the current one
    const result = []
    for (const i of arr) {
        result.push(i.charAt(0).repeat(averageRounded))
    }
    // return the new array
    return result;
}

console.log(averageLength(['u', 'y']), ['u', 'y']) // average length is 1
console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc']) // average length is 3
console.log(averageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee']) // average length is 2.5 round up to 3


// do it again using map

const averageLength2 = arr => {
    const sum = arr.reduce((a, c) => a + c.length, 0)
    const roundedAverage = Math.round(sum / arr.length)
    return arr.map(ele => ele[0].repeat(roundedAverage))
}

console.log(averageLength2(['u', 'y']), ['u', 'y']) // average length is 1
console.log(averageLength2(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc']) // average length is 3
console.log(averageLength2(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee']) // average length is 2.5 round up to 3


// the average of the strings could also be average = Math.round(arr.join('').length / arr.length)