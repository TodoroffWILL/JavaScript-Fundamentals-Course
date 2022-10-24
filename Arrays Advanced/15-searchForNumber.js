function searchForNum(arrayOfNums, commands) {
  let numsToTake = commands[0];
  let numsToDelete = commands[1];
  let sameNum = commands[2];

  let takenNums = arrayOfNums.slice(0, numsToTake); // SLICE DOESNT CHANGE THE ARRAY IT COPIES IT. NOT INCLUDING THE END NUM
  takenNums.splice(0, numsToDelete); // From which number to which numbers DELETING IT;

  let counter = 0;

  for (const num of takenNums) {
    if (num === sameNum) {
      counter++;
    }
  }
  console.log(`Number ${sameNum} occurs ${counter} times.`);
}

searchForNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);
