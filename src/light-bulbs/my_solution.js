// Comment it before submitting
class CNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function solution(root) {
  // Your code
  // “ヽ(´▽｀)ノ”
  if (root == null) return 0;

  let res = root.value;
  let lres = solution(root.left);
  let rres = solution(root.right);

  if (lres > res) res = lres;
  if (rres > res) res = rres;
  return res;
}

function test() {
  var node1 = new CNode(1);
  var node2 = new CNode(-5);
  var node3 = new CNode(3);
  node3.left = node1;
  node3.right = node2;
  var node4 = new CNode(2);
  node4.left = node3;
  console.assert(solution(node4) === 3);
}

test();
