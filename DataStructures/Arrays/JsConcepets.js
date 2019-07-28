/* Primitive types :
    1, true, 'hello', undefined; 
*/

/** References Type */
var obj1 = {value: 10};
var obj2 = obj1;

var obj3 = {value: 10}

console.log('Obj 1 & Obj 2 are references to the same memories cells');
console.log( obj1 === obj2);

console.log('Obj 1 & Obj 3 are references to different memories cells')
console.log( obj1 === obj3);


/** Context vs Scope */
function b() {
    let a = 4;
}

// console.log(a will return Reference Error);

const object4 = {
    a: function(){
       return this;
    }
}

console.log(object4.a());

/** Instantiation */
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi i'm ${this.name},I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play(){
        console.log(`I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.introduce();
wizard2.introduce();
wizard1.play();
wizard2.play();