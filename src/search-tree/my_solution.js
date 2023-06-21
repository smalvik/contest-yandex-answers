/**
Comment it before submitting 


class CNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
*/

function solution(root) {
  return isBSTUtil(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

function isBSTUtil(node, min, max) {
  if (node == null) return true;

  if (node.value < min || node.value > max) return false;

  return (
    isBSTUtil(node.left, min, node.value - 1) &&
    isBSTUtil(node.right, node.value + 1, max)
  );
}

function test() {
  var node1 = new CNode(1, null, null);
  var node2 = new CNode(4, null, null);
  var node3 = new CNode(3, node1, node2);
  var node4 = new CNode(8, null, null);
  var node5 = new CNode(5, node3, node4);
  console.assert(solution(node5));
  node4.value = 5;
  console.assert(!solution(node5));
}
