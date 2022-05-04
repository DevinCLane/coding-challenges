/* 
https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/


/* 
My notes:
- I attempted to do something with filter, thinking that if I could filter
based on the number of times something appeared % 2 !== 0, then that would give me
my answer. I couldn't find the syntax within my own alotted time constraint.
What follows is a solution from another user, with my analysis of why this works.
*/


function findOdd(A) {
    var obj = {}; // create an object to store our counting of elements
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1; // if the object contains our item, add 1 to its count. Otherwise create it with a count of 1
    });
    
    for(prop in obj) { // loop over our object
      if(obj[prop] % 2 !== 0) return Number(prop); // if the object has an odd count, return it (converting it to a number first)
    }
  }