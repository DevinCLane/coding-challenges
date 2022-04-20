// Prompt:
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise :)

// My Notes:
// if each dragon requires 2 bullets,
git // then we can write: as long as bullets*2 >= dragons, then he survives, otherwise he doesn't

function hero(bullets, dragons) {
    if (bullets >= dragons * 2) {
        return true;
    } else return false;
}

console.log(hero(10, 5), true)
console.log(hero(7, 4), false)
console.log(hero(4, 5), false)
console.log(hero(100, 40), true)
console.log(hero(1500, 751), false)
console.log(hero(0, 1), false)

// https://www.codewars.com/kata/59ca8246d751df55cc00014c