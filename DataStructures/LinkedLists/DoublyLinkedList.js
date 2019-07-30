class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next:null,
            prev:null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        let newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;   
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        newNode.prev = this.tail;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
       const array = [];
       let currentNode = this.head;
       while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
       }
       return array;
    }
    insert(index, value) {
        // check input;
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this.printList();
    }
    remove(index) {
        // check input;
        if(index >= this.length){
            this.tail.next = null;
        }
        const leader = this.traverseToIndex(index-1);
        const follower = this.traverseToIndex(index+1);
        leader.next = follower;
        follower.prev = leader;
        this.length--;
        return this.printList(); 
    }
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(11);
myLinkedList.prepend(13);
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());