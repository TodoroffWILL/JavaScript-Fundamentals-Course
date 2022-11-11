function censor(text, word) {
  let result = text;

  while (result.includes(word)) {
    result = result.replace(word, "*".repeat(word.length));
  }
  console.log(result);
}
censor("A small sentence with some words,small mother fucker,small!", "small");
