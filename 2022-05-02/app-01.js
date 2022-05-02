/*
https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.

*/

/*
My notes:
- add up all the first elements of each array
- subtract all the second elements of each array
*/

const number = function(busStops) {
    let enterBus = 0 
    let exitBus = 0
    for (let i = 0; i < busStops.length; i++) {
        enterBus += busStops[i][0]
        exitBus += busStops[i][1]
        // console.log(enterBus, "enterBus")
        // console.log(exitBus, "exitBus")
    }
    return enterBus - exitBus;
}

// console.log(number([[10,0],[3,5],[5,8]]),5);
// console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
// console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
// console.log(number([[0,0]]),0);

/*
Notes post coding:

- I attempted to use a nested for loop, which resulted in my values being added two times to each variable (e.g., enterBus += 10, then again enterBus += 10)
- Removed the nested for loop and it works!
*/

// using reduce():

const numberWithReduce = (busStops) => busStops.reduce((remaining, [on, off]) => remaining + on - off, 0);

// use reduce to pass through a 'remaining' variable, then add the people entering, minus the people exiting.

console.log(numberWithReduce([[10,0],[3,5],[5,8]]),5);