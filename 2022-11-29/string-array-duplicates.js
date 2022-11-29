/* 
You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces 

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
dup(["kelless","keenness"]), ['keles','kenes'])
*/

const dup = arr => {
    const result = []
    for (const item of arr) {
        result.push(item.split('').filter((element, index, array) => element !== array[index - 1]).join(''))
    }
    return result
}

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
console.log(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
console.log(dup(["kelless","keenness"]), ['keles','kenes'])

// refactor using map

const dup2 = arr => {
    return arr.map(word => {
        return word.split('').filter((element, index, array) => element !== array[index - 1]).join('')
    })
}

console.log(dup2(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
console.log(dup2(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
console.log(dup2(["kelless","keenness"]), ['keles','kenes'])