function sumOfDigits(num) {
  let sum = 0;
  let numberAsStr = num.toString();
  let numOfDigits = numberAsStr.length;

  for (let i = 0; i < numOfDigits; i++) {
    let currentDigit = Number(numberAsStr[i]);
    sum += currentDigit;
  }
  console.log(sum);
}
sumOfDigits(245678);
