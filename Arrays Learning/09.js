function mergeArrays(firstArr, secondArr) {
  let extraArray = [];
  let firstArrLength = firstArr.length;

  for (let i = 0; i < firstArrLength; i++) {
    if (i % 2 == 0) {
      extraArray.push(Number(firstArr[i]) + Number(secondArr[i]));
    } else {
      extraArray.push(firstArr[i] + secondArr[i]);
    }
  }

  console.log(extraArray.join(" - "));
}

mergeArrays(
  ["5", "15", "23", "56", "35"],

  ["17", "22", "87", "36", "11"]
);
