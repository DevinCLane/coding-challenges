/* 
implement linear search
*/

/**
 *
 * @param {number[]} list - the array of numbers we are searching
 * @param {number} item - the number we are looking for
 * @returns {number} - the index of the item we're looking for
 */
function linearSearch(list, item) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === item) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([2, 6, 7, 90, 103], 90));

/**
 *
 * @param {number[]} list - the array of numbers we are searching
 * @param {number} item - the number we are looking for
 * @returns {number} - the index of the item we're looking for
 */
function linearSearch2(list, item) {
    for (const num of list) {
        if (num === item) {
            return list.indexOf(num);
        }
    }
}

console.log(linearSearch([2, 6, 7, 90, 103], 90));
