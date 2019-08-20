const letters = ['dc', 'ab', 'ba', 'cd'];
const baskets = [2, 65 ,34, 2, 1, 7, 8];
console.log(letters.sort());
console.log(baskets.sort());


/** 
var a = 'réservé'; // with accents, lowercase
var b = 'RESERVE'; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, 'en', {sensitivity: 'base'}));
*/

let a  = baskets.sort((a, b)=>{
    return a - b;
});

console.log(a)