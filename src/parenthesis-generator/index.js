function generatorParenthesis(count, str, openParenthesis, closeParenthesis) {
  if (openParenthesis === count && closeParenthesis === count) {
    console.log(str);
  } else {
    if (openParenthesis > 0) {
      generatorParenthesis(
        count + 1,
        str + "(",
        openParenthesis - 1,
        closeParenthesis
      );
    }
    if (count > 0 && closeParenthesis > 0) {
      generatorParenthesis(
        count - 1,
        str + ")",
        openParenthesis,
        closeParenthesis - 1
      );
    }
  }
}

function solve() {
  const n = 6;
  const count = 0;
  const str = "";
  const openParenthesis = n;
  const closeParenthesis = n;
  generatorParenthesis(count, str, openParenthesis, closeParenthesis);
}

solve();
