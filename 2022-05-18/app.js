/* 
https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true

*/

// first pass
function setAlarm(employed, vacation) {
    if (employed === true && vacation === false) { // if you're employed and not on vacation, then you need an alarm. all other cases will be false.
        return true
    } else return false
}

// clean it up
const setAlarmClean = (employed, vacation) => employed && !vacation;

// test cases

console.log(setAlarm(true, true),  false,"Should be false.");
console.log(setAlarm(false,true),  false, "Should be false.");
console.log(setAlarm(true, false), true,"Should be true.");