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
  return isAnagram(LMR(root));
}

function LMR(root) {
  let arr = [];
  if (root.left !== null) {
    arr.push(...LMR(root.left));
  }

  arr.push(root.value);

  if (root.right !== null) {
    arr.push(...LMR(root.right));
  }

  return arr;
}

function isAnagram(arr) {
  if (arr.length % 2 === 0) {
    return false;
  }

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }

  return true;
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
