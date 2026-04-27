/* 
times ten function:
clean up your global scope by moving your cache inside your function
protip: use a closure to return a function you can call later
*/

const times10 = (n) => n * 10;

const memoizedClosureTimes10 = () => {
    const cache = {};
    return (n) => {
        if (n in cache) {
            console.log("fetching from cache:");
            return cache[n];
        } else {
            console.log("calculating result:");
            let result = times10(n);
            cache[n] = result;
            return result;
        }
    };
};

const memoClosureTimes10 = memoizedClosureTimes10();
console.log(memoClosureTimes10(9));
console.log(memoClosureTimes10(9));
