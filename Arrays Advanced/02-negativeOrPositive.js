function negativeOrPositive(arr) {
  let numbers = [];

  for (const element of arr) {
    let number = Number(element);

    if (number < 0) {
      numbers.unshift(number);
    } else {
      numbers.push(number);
    }
  }
  for (const number of numbers) {
    console.log(number);
  }
}
negativeOrPositive(["7", "-2", "8", "9"]);
