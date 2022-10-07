function arrayRotation(firstArr, rotations) {
  for (let i = 0; i < rotations; i++) {
    let numToMove = firstArr.shift();

    firstArr.push(numToMove);
  }

  console.log(firstArr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
