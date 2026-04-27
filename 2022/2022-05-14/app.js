/* 
https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30

Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

*/

function cockroachSpeed(s) {
    return Math.floor(s * (100000/3600));
}

/* 
1 km/hour * 100000cm/km = converts to cm
1km/hr * 1hr/3600 seconds = converts to seconds
*/

// tests
console.log(cockroachSpeed(1.08), 30);
console.log(cockroachSpeed(1.09), 30);
console.log(cockroachSpeed(0), 0);