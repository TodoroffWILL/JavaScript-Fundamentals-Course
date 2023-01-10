function stringSubstring(word, sentence) {
  const tokens = sentence.split(" ");

  for (const token of tokens) {
    if (word.toLocaleLowerCase() === token.toLocaleLowerCase()) {
      return console.log(token);
    }
  }
}
stringSubstring("javascript", "JavaScript is the best programming language");
