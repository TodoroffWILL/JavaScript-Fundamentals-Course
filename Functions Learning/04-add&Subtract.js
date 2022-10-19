function addAndSubtract(firstNum, secondNum, lastNum) {
  function add(firstNum, secondNum) {
    let sumOfTwoNums = firstNum + secondNum;
    return sumOfTwoNums;
  }

  let sum = add(firstNum, secondNum);

  function subTract(sum, lastNum) {
    let subTractOfTwo = sum - lastNum;
    return subTractOfTwo;
  }

  let finalResult = subTract(sum, lastNum);

  console.log(finalResult);
}

addAndSubtract(23, 6, 10);
