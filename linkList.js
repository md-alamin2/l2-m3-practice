class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const head = new Node(20);
head.next = new Node(30);
head.next.next = new Node(40);

let temp = head;
while (temp !== null) {
  console.log(temp.value, " ");
  temp = temp.next;
}
