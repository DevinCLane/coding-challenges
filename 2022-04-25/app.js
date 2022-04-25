// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function love(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 === 0) {
    return false;
  } else if (flower1 % 2 == 1 && flower2 % 2 == 1) {
    return false;
  } else {
    return true;
  }
}

console.log(love(1,4), true)
console.log(love(2,2), false)
console.log(love(0,1), true)
console.log(love(0,0), false)


// alternate, simpler solution

function loveFunction(flower1, flower2){
    return flower1 % 2 !== flower2 % 2; // if the result of %2 is not the same, return true; otherwise return false
}