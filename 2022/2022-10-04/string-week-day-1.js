
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
    const numberArr = '0123456789'.split('');
    const letterArr = 'OIZEhSGLBq'.split('');
    let answerStr = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < numberArr.length; j++) {
            if (numberArr[j] === str[i]) {
                answerStr += letterArr[j];
            } else {
                if (letterArr[j] === str[i]) {
                    answerStr += numberArr[j]
                }
            }
        }
        if (answerStr.length === i) {
            answerStr += str[i];
        }
    }
    return answerStr
}

console.log(fixString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."), "PRO-TIP #498: IT'S NICE TO SAY HELLO.")