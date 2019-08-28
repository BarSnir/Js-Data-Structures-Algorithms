let calculationNum = 0;
let calculationNum2 = 0;

function fibonacciMaster() { // O(n)
    let cache = {};
    return function fib(n) {
        calculationNum++;
        if(n in cache){
            return cache[n];
        } else {
            if( n < 2){
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}

function fibonacciRecursive(n) { //O(2^n);
    calculationNum2++;
    if( n < 2){
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

const cachedFib = fibonacciMaster();
cachedFib(100);
console.log("\x1b[32m",`we calculate: ${calculationNum} times with cache with n = 100`);

fibonacciRecursive(35);
console.log("\x1b[31m",`we calculate: ${calculationNum2} times without cache with n = 35`);