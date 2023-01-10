function pascalWords(word) {
  let result = word[0];
  let lower = word.toLowerCase();

  for (let i = 1; i < word.length; i++) {
    if (word[i] !== lower[i]) {
      result += ", ";
    }
    result += word[i];
  }
  console.log(result);
}
pascalWords("SplitMeIfYouCanHaHaYouCantOrYouCan");
