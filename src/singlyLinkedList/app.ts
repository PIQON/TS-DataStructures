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
}

const sll = new SLL();

sll.push(5);

console.log(sll);
