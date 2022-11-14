/* 
Get the mean of an array:

It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script. 

Return the average of the given array rounded down to its nearest integer. The array will never be empty.
e.g.,
getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1)
*/

const getAverage = arr => {
    // add up elements
    const sum = arr.reduce((a, c) => a + c, 0)
    // divide by number of elements
    const average = sum / arr.length
    // round down and return
    return Math.floor(average)
}

console.log(getAverage([2,2,2,2]),2)
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1)