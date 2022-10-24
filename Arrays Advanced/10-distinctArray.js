function distinctArray(array) {
  let uniqueNums = [];
  let arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    if (!uniqueNums.includes(array[i])) {
      uniqueNums.push(array[i]);
    }
  }
  console.log(uniqueNums.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
