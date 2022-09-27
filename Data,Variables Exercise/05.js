function amazingNum(num) {
  let textNum = num.toString();
  let sum = 0;
  let isAmazing = false;

  for (let i = 0; i < textNum.length; i++) {
    let currentNumber = Number(textNum[i]);
    sum += currentNumber;
  }
  let sumText = sum.toString();
  for (let i = 0; i < sumText; i++) {
    let currentDiggit = sumText[i];
    if (currentDiggit == "9") {
      isAmazing = true;
      break;
    }
  }
  console.log(`${num} Amazing? ${isAmazing ? "True" : "False"}`);
}
amazingNum(1233);
