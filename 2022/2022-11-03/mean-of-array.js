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
    // sum the array
    const sum = arr.reduce((a, c) => a + c, 0)
    // divide the sum by the total number of elements in the array
    const average = sum / arr.length
    // round down to the nearest integer
    const rounded = Math.floor(average)
    return rounded
}

console.log(getAverage([2,2,2,2]),2) 
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1)

