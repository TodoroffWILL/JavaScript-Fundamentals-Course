function reverseNuminArray(counts, numbs) {
  // take count elements from numbers

  // reverse the elements
  // print
  let newArr = [];
  for (let i = 0; i < counts; i++) {
    newArr[counts - 1 - i] = numbs[i];
  }
  console.log(newArr.join(" "));
}

reverseNuminArray(3, [10, 20, 30, 40, 50]);
