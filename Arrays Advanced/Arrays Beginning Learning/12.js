function equalSums(arr) {
  let foundIndex = "no";
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let leftSum = 0;
    let rightSum = 0;

    // Calculated Leftsum from half the array
    for (let left = 0; left < i; left++) {
      leftSum += arr[left];
    }
    // Calculated Rightsum from half the array
    for (let right = i + 1; right < arrLength; right++) {
      rightSum += arr[right];
    }
    if (leftSum == rightSum) {
      foundIndex = i;
    }
  }
  console.log(foundIndex);
}
equalSums([1, 2, 3, 3]);
