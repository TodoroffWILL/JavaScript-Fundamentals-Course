function wordCounter(text, word) {
  let wordsCount = text.split(" ").filter((w) => w == word).length;

  console.log(wordsCount);
}
wordCounter("This is a word and it also is a sentence", "is");
