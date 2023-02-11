class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head.data;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
}

const ll = new LinkedList();

console.log(ll);

ll.insertFirst("node1");
ll.insertFirst("node0");
// ll.insertLast("node2");

console.log(ll);

// // Comment it before submitting
// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// function getNodeByIndex(node, index) {
//   while (index) {
//     node = node.next;
//     index -= 1;
//   }
//   return node;
// }

// async function insertNode(head, index, value) {
//   let newNode = new Node(value);

//   if (index == 0) {
//     newNode.next = head;
//     return await newNode;
//   }

//   previousNode = getNodeByIndex(head, index - 1);
//   console.log(previousNode);
//   newNode.next = previousNode.next;
//   previousNode.next = newNode;
//   return await head;
// }

// // function removeNode(head, index, value) {}

// async function printLinkedList(head) {
//   let current = head;
//   while (current) {
//     console.log(current.value);
//     current = current.next;
//   }
// }

// async function test() {
//   // createLinkedList
//   var node2 = new Node("node2");
//   var node1 = new Node("node1", node2);
//   var node0 = new Node("node0", node1);
//   printLinkedList(node0);
//   await insertNode(node0, 0, "newNode");
//   printLinkedList(node0);
// }

// test();
