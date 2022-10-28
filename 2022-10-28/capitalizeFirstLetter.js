/* 
Given a string of two or more words, capitalize the first letter of each word

e.g., crime and punishment => Crime And Punishment
*/

const capitalizeFirst = str => {
    // lowercase everything
    return str.toLowerCase().split(' ').map(element => {
        return element[0].toUpperCase() + element.slice(1)
    })
    .join(' ')
    // split into an array
    // for each element in the array, capitalize the first letter, and concatenate everything except the first letter (slice)
}

console.log(capitalizeFirst('crime and punishment'), 'Crime And Punishment')