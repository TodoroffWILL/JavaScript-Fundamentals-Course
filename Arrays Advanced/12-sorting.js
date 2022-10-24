function sorting(arr) {
  let sortedArr = arr.sort((a, b) => a - b); // FROM LOWER TO BIGGER NUMBER 
  let resultArray = [];
  let kur = sortedArr.length;
  for (let i = kur; i >= 0; i -= 2) {
    let maxNum = sortedArr.pop();
    let minNum = sortedArr.shift();
    resultArray.push(maxNum, minNum);
    x;
  }
  console.log(resultArray.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
