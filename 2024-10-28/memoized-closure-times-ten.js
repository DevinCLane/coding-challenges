/* 

times ten function:
clean up your global scope by moving your cache inside your function
protip: use a closure to return a function you can call later
*/

const times10 = (n) => n * 10;

const closureTimes10 = () => {
    const cache = {};
    return (n) => {
        if (n in cache) {
            return cache[n];
        } else {
            let result = times10(n);
            cache[n] = result;
            return result;
        }
    };
};
