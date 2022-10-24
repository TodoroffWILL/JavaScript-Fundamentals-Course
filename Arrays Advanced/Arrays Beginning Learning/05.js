function sumEven(numbers) {
  let sum = 0;
  for (let textNumb of numbers) {
    let number = Number(textNumb);

    if (number % 2 == 0) {
      sum += number;
    } else {
      sum -= number;
    }
  }
  console.log(sum);
}

sumEven(["1", "2", "3", "4", "5", "6"]);
