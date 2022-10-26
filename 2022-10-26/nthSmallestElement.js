/* 
Task

Given an array/list of integers, find the Nth smallest element in the array.
Notes

    Array/list size is at least 3.
    Array/list's numbers could be a mixture of positives , negatives and zeros.
    Repetition in array/list's numbers could occur, so don't remove duplications.

Input >> Output Examples

arr=[3,1,2]            n=2    ==> return 2 
arr=[15,20,7,10,4,3]   n=3    ==> return 7 
arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
arr=[2,1,3,3,1,2],     n=3    ==> return 2 

*/

const nthSmallest = (arr, n) => {
    // sort the array from smallest to largest
    arr.sort((a, b) => a - b)
    // return the the n - 1 index of the array. 
    return arr[n - 1]
}


console.log(nthSmallest([3,1,2], 2), 2)
console.log(nthSmallest([15,20,7,10,4,3], 3), 7)
console.log(nthSmallest([2,169,13,-5,0,-1], 4), 2)
console.log(nthSmallest([2,1,3,3,1,2], 3), 2)

// could you do it as a one-liner?

const nthSmallest2 = (arr, n) => arr.sort((a, b) => a - b)[n - 1]

console.log(nthSmallest2([3,1,2], 2), 2)
console.log(nthSmallest2([15,20,7,10,4,3], 3), 7)
console.log(nthSmallest2([2,169,13,-5,0,-1], 4), 2)
console.log(nthSmallest2([2,1,3,3,1,2], 3), 2)