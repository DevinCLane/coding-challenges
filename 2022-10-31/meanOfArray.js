/* 
Get the mean of an array:

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script. 
Return the average of the given array rounded down to its nearest integer. The array will never be empty. 
e.g., 
getAverage([2,2,2,2]),2) 
getAverage([1,2,3,4,5,]),3); 
getAverage([1,1,1,1,1,1,1,2]),1)

https://www.codewars.com/kata/563e320cee5dddcf77000158/javascript
*/

const getAverage = arr => {
    // add up each member of the array
    const sum = arr.reduce((a, c) => a + c, 0)
    // divide by the length of the array
    const average = sum / arr.length
    // round down to nearest integer, return
    const roundDown = Math.floor(average)
    return roundDown
}

console.log(getAverage([2,2,2,2]),2)
console.log(getAverage([1,2,3,4,5,]),3)
console.log(getAverage([1,1,1,1,1,1,1,2]),1)