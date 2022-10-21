// given a string of text, return the most recurring character
// e.g., hello -> l 

const mostRecurring = str => {
    const map = {}
    for (const letter of str) {
        if (!map[letter]) {
            map[letter] = 1;
        } else map[letter]++
    }
    const mapValues = Object.values(map)
    const maxValue = Math.max(...mapValues)
    return Object.keys(map).find(key => map[key] === maxValue)
}

// console.log(mostRecurring('hello'), 'l')


// refactor

const mostRecurring2 = str => {
    const map = {}
    for (letter of str) {
        if (map[letter]) {
            map[letter]++
        } else map[letter] = 1
    }

    const maxValue = Math.max(...Object.values(map))
    const charArray = Object.keys(map)
    const valuesArray = Object.values(map)

    return charArray[valuesArray.indexOf(maxValue)]

}

console.log(mostRecurring2('hello'), 'l')