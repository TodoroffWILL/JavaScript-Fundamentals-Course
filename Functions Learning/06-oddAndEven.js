function oddAndEven(num) {
  let numAsString = num.toString();
  let numAsStringLength = numAsString.length;
  let even = 0;
  let odd = 0;

  for (let i = 0; i < numAsStringLength; i++) {
    let singleNum = Number(numAsString[i]);

    if (singleNum % 2 === 0) {
      even += singleNum;
    } else {
      odd += singleNum;
    }
  }
  console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddAndEven(3495892137259234);
