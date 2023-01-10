function valueOfString(input) {
  let command = input.pop();
  let sum = 0;

  let wordToCheck = input.shift().split("");

  for (const letter of wordToCheck) {
    if (command === "LOWERCASE") {
      if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
        sum += letter.charCodeAt();
      }
    } else if (command === "UPPERCASE") {
      if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
        sum += letter.charCodeAt();
      }
    }
  }

  console.log(`The total sum is: ${sum}`);
}
valueOfString(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
valueOfString(["AC/DC", "UPPERCASE"]);
