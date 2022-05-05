/* 
https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

/* 
My notes:
- use reduce(), if acc !== c, return c;
- doesn't work. I'm missing something here.
*/

/* function stray(numbers) {
    let diff = numbers.reduce((acc, c) => {
        if (acc !== c) {
            return c;
        }
    },
    numbers[0] )
    return diff
  } */


/* 
Peeked at solutions and see this.
My notes of why this works follow
 */

function stray(numbers) {
    var a = numbers.sort(); // sort the array
    
    if(a[0] != a[1]) { // if the first one is different than second one
      return a[0] // return the first one
    } 
    return a[a.length-1] // otherwise return the last element of the array
  }

console.log(stray([1, 1, 2]), 2)
console.log(stray([1, 2, 2]), 1)