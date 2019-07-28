let obj = {a: 5};
let obj2 = obj;

obj2.a = 2;
console.log(obj);
console.log(obj2);

/** The same */

obj2 = 'hello';

console.log(obj);
console.log(obj2);

/** Obj2 now is a pointer for another cell in the memory */