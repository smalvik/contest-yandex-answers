function binomialCoeff(n, k) {
  let res = 1;

  // Since C(n, k) = C(n, n-k)
  if (k > n - k) k = n - k;

  // Calculate value of
  // [n*(n-1)*---*(n-k+1)] /
  // [k*(k-1)*---*1]
  for (let i = 0; i < k; ++i) {
    res *= n - i;
    res /= i + 1;
  }

  return res;
}

// A Binomial coefficient
// based function to find
// nth catalan number in
// O(n) time
function catalan(n) {
  // Calculate value
  // of 2nCn
  let c = binomialCoeff(2 * n, n);

  // return 2nCn/(n+1)
  return c / (n + 1);
}

// A function to count
// number of BST with
// n nodes using catalan
function countBST(n) {
  // find nth catalan number
  let count = catalan(n);

  // return nth catalan number
  return count;
}

function solve() {
  const n = Number("3".trim(" "));

  // find count of BST
  // and binary trees
  // with n nodes
  const count1 = countBST(n);

  // print count of BST and
  // binary trees with n nodes
  console.log("Count of BST with " + n + " nodes is " + count1);
}

solve();
