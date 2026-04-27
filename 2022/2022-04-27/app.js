/*
https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

PROMPT
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

/*
MY NOTES:
includes() is an array method that tells us if an array includes a given value or not

*/

function check(a, x) {
  return a.includes(x);
}

console.log(check([66, 101], 66), true)
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);

/* ALTERNATE SOLUTION
what if we didn't have includes()?

Here we have a for loop running through each element of the array, logging each one.
If we find x, break the loop and return true
Otherwise we return false
 */
function checkWithForLoops(a, x) {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i])
        if (a[i] === x) {
            return true
        } else return false
    }
}