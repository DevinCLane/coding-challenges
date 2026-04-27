/* 

*/

// function
function minimumRemove(str) {
    // result []
    const result = [];
    // count = 0
    let count = 0;
    // loop over str
    for (const char of str) {
        // if "("
        if (char === "(") {
            // result.push
            result.push(char);
            // count ++
            count++;
            // if ")" && count > 0
        } else if (char === ")" && count > 0) {
            result.push(char);
            count--;
        } else if (char !== ")") {
            result.push(char);
        }
    }

    const filtered = [];
    for (let i = result.length - 1; i >= 0; i--) {
        let curr = result[i];
        if (curr === "(" && count > 0) {
            count--;
        } else {
            filtered.push(curr);
        }
    }
    return filtered.reverse().join("");
}

console.log(minimumRemove("(()))"), "(())");
console.log(minimumRemove("))(("), "");
console.log(minimumRemove("lee(t(c)o)de)"), "lee(t(c)o)de");
console.log(minimumRemove("a)b(c)d"), "ab(c)d");
