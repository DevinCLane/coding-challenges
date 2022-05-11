/* 
https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*/


// quick and dirty first go:
function arrayPlusArray(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      count += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) { // my DRY intuition is heightened here, how would I not copy/paste my for loop?
      count += arr2[i];
    }
    return count;
  }

// what if I needed to add up infinite arrays?

function addArrays(...array) {
    return [].concat(...arrays).reduce((a, b) => a + b, 0)
}