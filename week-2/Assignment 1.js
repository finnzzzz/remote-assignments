function max(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (max > numbers[i]) {
      max = max;
    } else {
      max = numbers[i];
    }
  }
  return max;
}

console.log(max([1, 2, 4, 5])); //5
console.log(max([5, 2, 7, 1, 6])); //7
