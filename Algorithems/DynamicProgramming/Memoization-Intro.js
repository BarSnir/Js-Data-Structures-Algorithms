function addTo80(n) {
    return n + 80;
}

function memoizeAddTo80(n) {
    let cache = {};
    return function(n) {
        if(n in cache) {
            console.log('cache');
            return cache[n];
        } else {
            console.log('production code');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoize = memoizeAddTo80(5);

console.log(memoize(5));
console.log(memoize(5));
/** caching */