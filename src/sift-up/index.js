// A class for Min Heap
class MinHeap {
  // Constructor: Builds a heap from a given array a[] of given size
  constructor() {
    this.arr = [];
  }

  left(i) {
    return 2 * i + 1;
  }

  right(i) {
    return 2 * i + 2;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  getMin() {
    return this.arr[0];
  }

  insert(k) {
    let arr = this.arr;
    arr.push(k);

    // Fix the min heap property if it is violated
    let i = arr.length - 1;
    while (i > 0 && arr[this.parent(i)] > arr[i]) {
      let p = this.parent(i);
      [arr[i], arr[p]] = [arr[p], arr[i]];
      i = p;
    }
  }

  // Decreases value of key at index 'i' to new_val.
  // It is assumed that new_val is smaller than arr[i].
  decreaseKey(i, new_val) {
    let arr = this.arr;
    arr[i] = new_val;

    while (i !== 0 && arr[this.parent(i)] > arr[i]) {
      let p = this.parent(i);
      [arr[i], arr[p]] = [arr[p], arr[i]];
      i = p;
    }
  }

  // Method to remove minimum element (or root) from min heap
  extractMin() {
    let arr = this.arr;
    if (arr.length == 1) {
      return arr.pop();
    }

    // Store the minimum value, and remove it from heap
    let res = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    this.MinHeapify(0);
    return res;
  }

  // This function deletes key at index i. It first reduced value to minus
  // infinite, then calls extractMin()
  deleteKey(i) {
    this.decreaseKey(i, this.arr[0] - 1);
    this.extractMin();
  }

  // A recursive method to heapify a subtree with the root at given index
  // This method assumes that the subtrees are already heapified
  MinHeapify(i) {
    let arr = this.arr;
    let n = arr.length;
    if (n === 1) {
      return;
    }
    let l = this.left(i);
    let r = this.right(i);
    let smallest = i;
    if (l < n && arr[l] < arr[i]) smallest = l;
    if (r < n && arr[r] < arr[smallest]) smallest = r;
    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      this.MinHeapify(smallest);
    }
  }
}

let h = new MinHeap();
h.insert(3);
h.insert(2);
h.deleteKey(1);
h.insert(15);
h.insert(5);
h.insert(4);
h.insert(45);

console.log(h.extractMin() + " ");
console.log(h.getMin() + " ");

h.decreaseKey(2, 1);
console.log(h.extractMin());
