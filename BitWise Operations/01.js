function binaryDigitsCounter(number, binaryNum) {
  let counter = 0;

  while (number > 0) {
    let leftOver = number % 2;
    if (leftOver === binaryNum) {
      counter++;
    }

    number = Math.floor(number / 2);
  }
  console.log(`We have -> ${counter}: ${binaryNum} zeroes`);
}
binaryDigitsCounter(20, 0);
