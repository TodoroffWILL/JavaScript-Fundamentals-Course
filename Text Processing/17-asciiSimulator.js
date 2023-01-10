function sumator(input) {
  let start = input[0];
  let end = input[1];

  let fromChar = Math.min(start.charCodeAt(), end.charCodeAt());
  let toChar = Math.max(start.charCodeAt(), end.charCodeAt());
  let sentence = input.pop();
  let sum = 0;

  for (const letter of sentence) {
    if (letter.charCodeAt() > fromChar && letter.charCodeAt() < toChar) {
      sum += letter.charCodeAt();
    }
  }
  console.log(sum);
}
sumator([".", "@", "dsg12gr5653feee5"]);
sumator(["a", "1", "jfe392$#@j24ui9ne#@$"]);
sumator(["?", "E", "@ABCEF"]);
