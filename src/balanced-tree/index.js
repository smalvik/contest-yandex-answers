if (process.env.REMOTE_JUDGE !== "true") {
  class CNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
}

function solution(root) {
  return isBalanced(root);
}

function height(root) {
  if (root === null) {
    return 0;
  }
  return Math.max(height(root.left), height(root.right)) + 1;
}

function isBalanced(root) {
  if (root === null) {
    return true;
  }

  let lh = height(root.left);
  let rh = height(root.right);

  return (
    Math.abs(lh - rh) <= 1 && isBalanced(root.left) && isBalanced(root.right)
  );
}

function test() {
  var node1 = new CNode(1);
  var node2 = new CNode(-5);
  var node3 = new CNode(3);
  node3.left = node1;
  node3.right = node2;
  var node4 = new CNode(10);
  var node5 = new CNode(2);
  node5.left = node3;
  node5.right = node4;
  console.assert(solution(node5));
}
