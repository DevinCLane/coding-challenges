/* 
https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

/* 
my notes:
struggled with this one, took inspiration from a solution, added my notes and analysis as follows:
*/

function count (string) {  
    var result = {}; // set up our resultant object
    string.split('').forEach( ele => { // split the string into an array, then run this function on each member of the array
       result[ele] ? result[ele]++ : result[ele] = 1; // does the object already contain the element? if so, add to its count, if not, keep the count at 1
    });
    return result; // return the result object
}


console.log(count("aba"), { a: 2, b: 1 }); 
console.log(count(""), {});    
