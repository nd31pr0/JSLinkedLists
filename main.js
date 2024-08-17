const LinkedList = require('./LInkedList.js');

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

//console.log(list.toString());
console.log(list.removeAt(2));
console.log(list.toString());