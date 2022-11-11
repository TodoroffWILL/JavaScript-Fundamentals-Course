function subString(word, startIndex, endIndex) {
  let result = word.substring(startIndex, startIndex + endIndex); // + because it doesn't catch the last Index of it.. just TO it !

  console.log(result);
}
subString("ASentence", 1, 8);
