function imitationGame(input) {
  let arr = input.slice();
  let message = input.shift();
  let tempMsg = "";
  let currentLine = arr.shift();

  while (currentLine !== "Decode") {
    let tokens = currentLine.split("|");
    let command = tokens[0];

    switch (command) {
      case "Move":
        let lettersNumb = Number(tokens[1]);
        let lettersToMove = message.substring(0, lettersNumb);
        tempMsg = message.replace(lettersToMove, "");
        tempMsg += lettersToMove;
        message = tempMsg;
        break;
      case "Insert":
        let index = Number(tokens[1]);
        let value = tokens[2];

        tempMsg = message.split("");
        tempMsg.splice(index, 0, value);
        message = tempMsg.join("");
        
        break;
      case "ChangeAll":
        let substring = tokens[1];
        let replacer = tokens[2];

        while (message.includes(substring)) {
          tempMsg = message.replace(substring, replacer);
          message = tempMsg;
        }
        
        break;
    }

    currentLine = arr.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}
imitationGame([
  "zzHe",
  "ChangeAll|z|l",
  "Insert|2|o",
  "Move|3",
  "Decode",
]);
