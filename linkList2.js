class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    // if the linked list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the linked list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    // if the linked list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the linked list is not empty
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.error("Index out of bounds");
      return undefined;
    }

    // if the insert in the beginning
    if (index === 0) {
      return this.prepend(value);
    }

    // if the insert in the end
    if (index === this.length) {
      return this.append(value);
    }

    // if the insert in the middle

    // find the leading node
    const leadingNode = this._traverseToIndex(index - 1);
    const holdingNode = leadingNode.next;
    const newNode = new Node(value);
    leadingNode.next = newNode;
    newNode.next = holdingNode;

    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      console.error("Index out of bounds");
      return undefined;
    }

    // if remove the head node
    if (index === 0) {
      const removedItem = this.head.value;
      this.head = this.head.next;
      // if the list had only one node
      if (this.length === 1) {
        this.tail = null;
      }

      this.length--;

      return removedItem;
    }

    const leadingNode = this._traverseToIndex(index - 1);
    const nodeToBeRemoved = leadingNode.next;
    leadingNode.next = nodeToBeRemoved.next;

    // if the removed node is the tail
    if (leadingNode.next === null) {
      this.tail = leadingNode;
    }
  }

  _traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr.join(" -> "), "-> null");
  }
}

const linkedList = new LinkList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

// linkedList.insert(2, 500);

linkedList.print();

linkedList.remove(3);
linkedList.remove(2);
linkedList.remove(1);
linkedList.remove(0);

linkedList.print();
