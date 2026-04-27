// Write a function which calculates the average of the numbers in a given list.
// Empty arrays should return 0.

// My notes: 
// First we check to see if the array length is 0: if so we return 0
// Then we set up a 'sum' variable to hold the sum of each element in our array
// Then we loop through our array adding each element to the 'sum' variable
// lastly we return the value of 'sum' divided by the number of elements in the array

function find_average(array) {
  if (!array.length) {
    return 0;
  } else {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
}

console.log(find_average([1, 1, 1], 1));
console.log(find_average([1,2,3]), 2);
console.log(find_average([1,2,3,4]), 2.5);
console.log(find_average([]), 0);
