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
            this.length++;
            return this;
        }
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
        this.length++;
        return this;
    }
    pop() {
        if(this.bottom === null) {
            return this;
        }
        if(this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }
}  
const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.pop();
myStack.pop();
console.log(myStack);


class StackArray {
    constructor(){
        this.stack = [];
    }
    peek() {
        return this.stack[this.stack.length-1];
    }
    push(value) {
        this.stack.push(value);
    }
    pop() {
        this.stack.pop();
    }
} 

const myStackArray = new StackArray();
myStackArray.push('Google');
myStackArray.push('Udemy');
myStackArray.push('Discord');
myStackArray.pop();
myStackArray.pop();
console.log(myStackArray.stack);