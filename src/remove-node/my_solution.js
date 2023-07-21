function remove(node, key) {
  if (!node) {
    return node;
  }

  if (key < node.value) {
    node.left = remove(node.left, key);
  } else if (key > node.value) {
    node.right = remove(node.right, key);
  } else {
    if (!node.left) {
      return node.right;
    } else if (!node.right) {
      return node.left;
    }

    const min = minValue(node.right);
    node.value = min.value;
    node.right = remove(node.right, min.value);
  }

  return node;
}
/**
 * @param {object} node
 * */
function minValue(node) {
  let current = node;

  while (current.left) {
    current = current.left;
  }

  return current;
}
