function addAndSub(input) {
  let resultArr = [];
  let arrSum = 0;
  let resultSum = 0;

  let inputLength = input.length;

  for (let i = 0; i < inputLength; i++) {
    let currentNum = input[i];

    let odd = currentNum - i;
    let even = currentNum + i;

    if (currentNum % 2 == 0) {
      resultArr.push(even);
    } else {
      resultArr.push(odd);
    }
    arrSum += currentNum;
    resultSum += resultArr[i];
  }
  console.log(resultArr);
  console.log(arrSum);
  console.log(resultSum);
}
addAndSub([5, 15, 23, 56, 35]);
