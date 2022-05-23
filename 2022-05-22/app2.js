/* 
Doing it again from scratch next day without looking at solutions
*/

const deleteNth = (arr, n) => {
    const counter = {};
    return arr.filter( ele => (counter[ele] = counter[ele] ? counter[ele] + 1 : 1) <= n)
}

console.log(deleteNth([20,37,20,21], 1), [20,37,21])
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])