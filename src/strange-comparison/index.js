// const _inputLines = ["mxyskaoghi", "qodfrgmslc"];
const _inputLines = ["agg", "xda"];

const dictionary = {};
const occupied = [];

function compare(str1, str2) {
  if (str1.length !== str2.length) {
    return "NO";
  }

  for (let i = 0; i < str1.length; i++) {
    if (
      (dictionary.hasOwnProperty(str1[i]) && dictionary[str1[i]] !== str2[i]) ||
      (!dictionary.hasOwnProperty(str1[i]) && occupied.includes(str2[i]))
    ) {
      return "NO";
    }
    dictionary[str1[i]] = str2[i];
    occupied.push(str2[i]);
  }

  return "YES";
}

function solve() {
  const str1 = _inputLines[0].split("");
  const str2 = _inputLines[1].split("");

  console.log(compare(str1, str2));
}

solve();
