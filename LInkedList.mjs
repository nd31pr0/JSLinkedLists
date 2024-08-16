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

    // Remove last element from list
    pop() {
        if (!this.head) return null; // Return null if the list is empty

        if (!this.head.next) { // If there's only one node
            const removedNode = this.head;
            this.head = null; // Set head to null
            this.count--; // Decrement the count
            return removedNode; // Return the removed node
        }

        let currentNode = this.head;
        while (currentNode.next && currentNode.next.next) {
            currentNode = currentNode.next; // Traverse to the second-to-last node
        }

        const removedNode = currentNode.next; // The last node to be removed
        currentNode.next = null; // Remove the last node
        this.count--; // Decrement the count
        return removedNode; // Return the removed node
    }

    // search if node exists in the list
    contains(value){
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next; // Traverse to the next node
        }
        return false;
    }

    // Return index of node with 'value' or null if not found
    find(value){
        let currentNode = this.head
        let index = 0;
        while (currentNode) {
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.next; 
            index++;
        }
        return null;
    }
}