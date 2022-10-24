function reverseInPlace(letters) {
  for (let i = 0; i < letters.length / 2; i++) {
    let tempElement = letters[i];

    letters[i] = letters[letters.length - 1 - i];

    letters[letters.length - 1 - i] = tempElement;
  }
  console.log(letters.join(" "));
}
reverseInPlace(["a", "b", "c", "d", "e"]);
