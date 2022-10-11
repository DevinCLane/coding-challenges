/* 
from https://blog.barbaralaw.me/huntober-2022-day-1

switch a phrase like
"PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// implement fix function -> 
"PRO-TIP #498: IT'S NICE TO SAY HELLO."

mix ups are in both directions as follows
'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'
*/

// loop through a string
// check if it has either value in the key
// switch the value if it does


const fixString = str => {
    // set up the nums
    const nums = '0123456789'
    const letters = 'OIZEhSGLBq'
    let answerstr = ''
    // loop through string
    for (let i = 0; i < str.length; i++) {
        // loop through our keys
        for (let j = 0; j < nums.length; j++) {
            // if str has nums, flip it to letters
            if (nums.charAt(j) === str[i]) {
                answerstr += letters.charAt(j);
                // otherwise flip the letters for the numbers
            } else if (letters.charAt(j) === str[i]) {
                answerstr += nums.charAt(j)
            } 
        }
        // if we didn't switch anything, pass the letters through
        if (answerstr.length === i) {
            answerstr += str[i];
        }
    }
    // give us the results
    return answerstr
}


console.log(fixString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770"))