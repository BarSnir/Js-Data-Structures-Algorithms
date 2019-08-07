class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}
  
class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        if(this.bottom === null) {
            this.top = newNode;
            this.bottom = newNode;
            return this;
        }
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
        this.length ++;
        return this;
    }
    pop() {
        this.length --;
    }
}  
const myStack = new Stack();
myStack.push('google');
console.log(myStack);