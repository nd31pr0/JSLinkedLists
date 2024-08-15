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

    append(value) {
        // Add a new node at the end of the list
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


    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    size() {
        return this.count;
    }

    head() {
        return this.head
    }
    tail(){
        if(!this.head) return null// if list is empty
        let currentNode = this.head
        while(currentNode.next){
            currentNode = currentNode.next
        }
        return currentNode;
    }
}