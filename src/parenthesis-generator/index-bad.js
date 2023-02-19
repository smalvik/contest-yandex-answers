function parenthesisGenerator(count, str = "", left = 0, right = 0) {
  if (left === count && right === count) {
    console.log(`-----------------`);
    console.log(str);
    console.log(`left - ${left}`);
    console.log(`right - ${right}`);
    console.log(`-----------------`);
  }
  if (left < count) {
    // console.log(`left - ${left}`);
    // console.log(`str - ${str}`);
    parenthesisGenerator(count, str + "(", left + 1, right);
  }
  console.log(`##################`);
  if (right < count) {
    // console.log(`right - ${right}`);
    // console.log(`str - ${str}`);
    parenthesisGenerator(count, str + ")", left, right + 1);
  }
  console.log(`=================`);
}

function solve() {
  const count = 2;
  // let str = "";
  // left = 0;
  // right = 0;
  console.log(parenthesisGenerator(count));
}

solve();
