/*
  DLL - Doubly Linked List Implementation
*/

/*
  DLL Node - Doubly Linked List Node Element

  @types - Generic T.
  @params - Value (Generic T), Next (Generic Node<T>), Prev (Generic Node<T>).
  @desc - Description of Doubly Linked List Node element. Value represent a node value, next represent a next node element and prev previous node element.
*/

/*
  DLL - Dobuly Linked List Collection

  @types - Generic T.
  @definition - Head,Tail,Length.
  @desc - Description of Doubly Linked List collection class. Give us a few methods to work with nodes.
  @methods -
    1. Push
      @params - (value:T)
      @desc - Add a node to the DLL class.
    2. Pop
      @desc - Delete a node.

*/

class DLLNode<T> {
  constructor(
    public value: T,
    public next?: DLLNode<T>,
    public prev?: DLLNode<T>
  ) {}
}

class DLL<T> {
  head: DLLNode<T> | null = null;
  tail: DLLNode<T> | null = null;
  length: number = 0;

  constructor() {}

  push(value: T) {
    const node = new DLLNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const tail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return true;
    }

    this.tail = tail.prev;
    this.tail.next = null;
    tail.prev = null;

    this.length--;

    return this;
  }

  shift() {
    if (!this.head) return undefined;

    const currentHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return true;
    }

    this.head = currentHead.next;
    this.head.prev = null;
    currentHead.next = null;

    this.length--;

    return currentHead;
  }
}

const dll = new DLL();

dll.push(3);
dll.push(5);
dll.push(9);

dll.shift();

console.log(dll);
