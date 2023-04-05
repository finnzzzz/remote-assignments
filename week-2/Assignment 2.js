function calculate(args) {
  let { op, n1, n2 } = args;
  if (["+", "-"].includes(op)) {
    let output;
    if (op === "+") {
      output = n1 + n2;
    } else {
      output = n1 - n2;
    }
    return output;
  } else {
    return "Not supported";
  }
}

console.log(calculate({ n1: 2, n2: 3, op: "+" })); //5
console.log(calculate({ n1: 5, n2: 2, op: "-" })); //3
console.log(calculate({ n1: 1, n2: 6, op: "x" })); //Not supported
