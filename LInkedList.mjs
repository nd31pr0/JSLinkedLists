class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a new node at the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let lastNode = this.head;
        while (lastNode.next) {
            lastNode = lastNode.next;
        }
        lastNode.next = newNode;
    }

    // function to add element at the start of the list
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // function to return size of the list
    size() {
        return this.count;
    }

    // function to return first element of list
    head() {
        return this.head
    }

    // function to return last node of list
    tail(){
        if(!this.head) return null// if list is empty
        let currentNode = this.head
        while(currentNode.next){
            currentNode = currentNode.next
        }
        return currentNode;
    }
    // return element at indicated index
    at(index){
        let currentNode = this.head
        let count = 0
        while(currentNode){
            if(count === index){
                return currentNode
            }
            count++
            currentNode = currentNode.next
        }
        return null// if list is empty
    }
}