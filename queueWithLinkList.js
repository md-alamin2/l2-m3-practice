class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueWithLinkList {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    this.first ? this.first.value : undefined;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    // if the linked list is empty
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // if the linked list is not empty
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const nodeToBeRemoved = this.first;
    // if the queue has one node
    if (this.first === this.last) {
      this.last = null;
    }

    // if the queue has more than one node
    this.first = this.first.next;

    this.length--;
    return nodeToBeRemoved.value;
  }

  size(){
    return this.length;
  }

  print() {
    const arr = [];
    let currentNode = this.first;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr.join(" -> "), "-> null");
  }
}

const queue = new QueueWithLinkList();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.print();
