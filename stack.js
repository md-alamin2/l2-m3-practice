class Stack {
  constructor() {
    this.items = [];
  }

  // o(1)
  push(value) {
    this.items.push(value);
  }

  // o(1)
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.pop();
  }

  // o(1)
  peek() {  
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.items.length - 1];
  }

  // o(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // o(n)
  print(){
    console.log(this.items.slice().reverse().join(' -> '));
  }
}

const stack = new Stack();

console.log(stack.peek())
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();

console.log(stack.pop())


