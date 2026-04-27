/* 
given an array of integers a return a new array b such that b[i] = a[i - 1] + a[i] + a[i+1]. if an element does not exist it should be 0
*/

function newArr(a) {
    const b = [];
    for (let i = 0; i < a.length; i++) {
        b.push(
            // if that spot is in bounds, include it, otherwise add 0
            (i - 1 >= 0 ? a[i - 1] : 0) +
                a[i] +
                (i + 1 < a.length ? a[i + 1] : 0),
        );
    }
    return b;
}

// Test 1: Basic case
console.log(newArr([1, 2, 3]));
// Expected: [0+1+2, 1+2+3, 2+3+0] = [3, 6, 5]

// Test 2: Single element
console.log(newArr([5]));
// Expected: [0+5+0] = [5]

// Test 3: Two elements
console.log(newArr([1, 2]));
// Expected: [0+1+2, 1+2+0] = [3, 3]

// Test 4: Empty array
console.log(newArr([]));
// Expected: []
