function words(words) {
  const countShelf = {};

  words.forEach((el) => {
    if (countShelf.hasOwnProperty(el)) {
      countShelf[el]++;
    } else {
      countShelf[el] = 1;
    }
  });
  let sortedWordsbyCount = Object.entries(countShelf);
  sortedWordsbyCount.sort((a, b) => b[1] - a[1]);
  sortedWordsbyCount.forEach((el) => {
    console.log(`${el[0]} -> ${el[1]}`);
  });
}
words([
  "Here",
  "is",
  "the",
  "first",
  "sentence",

  "Here",
  "is",
  "another",
  "sentence",
  "And",

  "finally",
  "the",
  "third",
  "sentence",
]);
