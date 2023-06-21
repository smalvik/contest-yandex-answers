class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

//Root of the Binary Tree
let root;

/* can give min and max value according to your code or
    can write a function to find min and max value of tree. */

/* returns true if given search tree is binary
     search tree (efficient version) */
function isBST() {
  return isBSTUtil(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

/* Returns true if the given tree is a BST and its
      values are >= min and <= max. */
function isBSTUtil(node, min, max) {
  /* an empty tree is BST */
  if (node == null) return true;

  /* false if this node violates
        the min/max constraints */
  if (node.data < min || node.data > max) return false;

  /* otherwise check the subtrees recursively
        tightening the min/max constraints */
  // Allow only distinct values
  return (
    isBSTUtil(node.left, min, node.data - 1) &&
    isBSTUtil(node.right, node.data + 1, max)
  );
}

/* Driver program to test above functions */
root = new Node(5);
root.left = new Node(3);
root.right = new Node(8);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(9);

if (isBST()) console.log("IS BST");
else console.log("Not a BST");
