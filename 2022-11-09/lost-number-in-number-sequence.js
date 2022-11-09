/* 
An ordered sequence of numbers from 1 to N is given. 
One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

    The starting array sequence is [1,2,3,4,5,6,7,8,9]
    The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
    Your function should return the int 5.

If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).


findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')
*/

const findDeletedNumber = (arr, mixed) => {
    // if two arrays are the same, return 0
    if (arr.length === mixed.length) {
        return 0
    }
    // sort the array
    mixed.sort((a, b) => a - b)
    // map over the array, return the value that doesn't equal
    for (const i of arr) {
        if (arr[i] !== mixed[i]) {
            return arr[i]
        }
    }
}

// need to return for some optimizations: fails test cases "Expected: 1, instead got: 2"

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')


// improved solution

function findDeletedNumber(arr, mixArr) {
    let arrSum = arr.reduce((a,b) => a + b, 0)
    let mixArrSum = mixArr.reduce((a,b) => a + b, 0)
    return arrSum - mixArrSum
  }

  
//   using filter
  function findDeletedNumber(arr, mixArr) {
    return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
  }