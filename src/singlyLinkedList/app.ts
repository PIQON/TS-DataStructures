/*
  SLL - Singly Linked List Implementation
*/

/*
  SLL Node - Singly Linked List Node Element

  @types - Generic T.
  @params - Value (Generic T), Next (Generic Node<T>).
  @desc - Description of Singly Linked List Node element. Value represent a node value, next represent a next node element.
*/

class SLLNode<T> {
  constructor(public value: T, public next?: SLLNode<T>) {}
}

/*
  SLL - Singly Linked List Collection

  @types - Generic T.
  @definition - Head,Tail,Length.
  @desc - Description of Singly Linked List collection class. Give us a few methods to work with nodes.
  @methods -
    1. Push
      @params - (value:T)
      @desc - Add a node to the SLL class.
    2. Pop
      @desc - Pop a node element from SLL class.
    3. Shift
      @desc - Delete a head node element.
    4. Unshift
      @params - (value:T)
      @desc - Add a new node element to the begining.
    5. Get
      @params - (index:number)
      @desc - Find a node on index element. If not return null.
*/

class SLL<T> {
  head: SLLNode<T> | null = null;
  tail: SLLNode<T> | null = null;
  length: number = 0;

  push(value: T) {
    const node = new SLLNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.length) return null;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return true;
    }

    let current = this.head;
    let previous = null;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    this.tail = previous;
    this.tail.next = null;

    this.length--;

    return current;
  }

  shift() {
    if (!this.head) return null;

    let current = this.head;
    this.head = current.next;

    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    return current;
  }

  unshift(value: T) {
    const node = new SLLNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    }

    let current = this.head;

    this.head = node;
    this.head.next = current;

    this.length++;

    return node;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let temp = 0;

    while (temp !== index) {
      current = current.next;
      temp++;
    }

    return current;
  }

  set(index: number, value: T) {
    const node = this.get(index);

    if (!node) return false;

    node.value = value;

    return true;
  }

  insert(index: number, value: T) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }

    const node = this.get(index - 1);

    if (!node) return false;

    const newNode = new SLLNode(value);
    let temp = node.next;

    node.next = newNode;
    newNode.next = temp;

    this.length++;

    return true;
  }

  remove(index: number) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length) {
      return this.pop();
    }

    const prev = this.get(index - 1);

    if (!prev) return false;

    const temp = prev.next;
    prev.next = temp.next;

    this.length--;

    return true;
  }
}

const sll = new SLL();

sll.push(5);
sll.push(10);
sll.push(15);
sll.push(20);

sll.insert(1, 30);

sll.remove(1);
sll.remove(4);

console.log(sll);
