/* 
times ten function:
clean up your global scope by moving your cache inside your function
protip: use a closure to return a function you can call later
*/

const memoizedClosureTimes10 = () => {
    const cache = {};

    return (n) => {
        if (n in cache) {
            return cache[n];
        } else {
            let result = n * 10;
            cache[n] = result;
            return result;
        }
    };
};

const memoClosureTimes10 = memoizedClosureTimes10();
console.log("~~~task 3~~~");
console.log("task 3 calculated value:", memoClosureTimes10(9));
