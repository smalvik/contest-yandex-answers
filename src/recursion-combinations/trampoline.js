const trampoline =
  (fn) =>
  (...args) => {
    console.log("args");
    console.log(args);
    console.log(fn);
    let result = fn(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  };

const sumBelowRec = (number, sum = 0) =>
  number === 0 ? sum : () => sumBelowRec(number - 1, sum + number);

const sumBelow = trampoline(sumBelowRec);
console.log(sumBelow);

console.log(sumBelow(5));
