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
      @desc - Pop a node element from DLL class.
    3. Shift
      @desc - Delete a head node element.
    4. Unshift
      @params - (value:T)
      @desc - Add a new node element to the begining.
    5. Get
      @params - (index:number)
      @desc - Find a node on index element. If not return null.
    6. Set
      @params - (index:number,value:T)
      @desc - Set a new value to the finded node.
    7. Insert
      @params - (index:number,value:T)
      @desc - Insert a node on index with a given value.
    8. Remove
      @params - (index:number)
      @desc - Remove a node on given index.

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

  unshift(value: T) {
    const node = new DLLNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }

  get(index: number) {
    if (index < 0 || index > this.length) return null;

    let temp, current;

    if (index <= this.length / 2) {
      temp = 0;
      current = this.head;
      while (temp !== index) {
        current = current.next;
        temp++;
      }
    } else {
      temp = this.length - 1;
      current = this.tail;

      while (temp !== index) {
        current = current.prev;
        temp--;
      }
    }
    return current;
  }

  set(index: number, value: T) {
    if (index < 0 || index > this.length) return null;

    const node = this.get(index);

    if (!node) return false;

    node.value = value;

    return true;
  }

  insert(index: number, value: T) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    const newNode = new DLLNode(value);

    const node = this.get(index - 1);

    newNode.next = node.next;
    node.next = newNode;
    newNode.prev = node;

    this.length++;

    return true;
  }

  remove(index: number) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) {
      return this.shift();
    }

    if (index === this.length) {
      return this.pop();
    }

    const node = this.get(index);

    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;

    this.length--;

    return node;
  }
}

const dll = new DLL();

dll.push(3);
dll.push(5);
dll.push(9);

dll.shift();
dll.unshift(222);

dll.insert(1, "cos");

console.log(dll);
