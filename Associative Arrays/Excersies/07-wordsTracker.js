function wordTracker(array) {
  let sentenceOccurence = {};

  let wordsToCheck = array.shift().split(" ");

  for (const word of wordsToCheck) {
    sentenceOccurence[word] = 0;
  }
  for (const word of array) {
    if (sentenceOccurence.hasOwnProperty(word)) {
      sentenceOccurence[word]++;
    }
  }
  let sorted = Object.entries(sentenceOccurence);
  sorted.sort((a, b) => b[1] - a[1]);
  sorted.forEach((el) => {
    console.log(`${el[0]} - ${el[1]}`);
  });
}
wordTracker([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
