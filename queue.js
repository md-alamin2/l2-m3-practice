//* Array implementation of Queue data structure

class Queue {
  constructor() {
    this.items = [];
  }

  // o(1)
  enqueue(value) {
    this.items.push(value);
  }

  // o(n)
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.shift();
  }

  // o(1)
  peek() {  
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[0];
  }

  // o(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // o(n)
  print(){
    console.log("start ->", this.items.join(' -> '), "-> end");
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log(queue.peek())

console.log(queue.dequeue())
queue.print();
console.log(queue.peek())



