function imitationGame(input) {
  let decryptMsg = input.shift();
  let line = input.shift();

  while (line != "Decode") {
    let tokens = line.split("|");
    let command = tokens[0];

    switch (command) {
      case "Move": {
        let index = Number(tokens[1]);
        let firstPart = decryptMsg.substring(0, index);
        let secondPart = decryptMsg.substring(index);

        decryptMsg = secondPart + firstPart;
        break;
      }
      case "Insert": {
        let index = Number(tokens[1]);

        let firstPart = decryptMsg.substring(0, index);
        let secondPart = decryptMsg.substring(index);
        let value = tokens[2];

        decryptMsg = firstPart + value + secondPart;
        break;
      }
      case "ChangeAll": {
        let substring = tokens[1];
        let replacement = tokens[2];
        decryptMsg = decryptMsg.split(substring).join(replacement);
        break;
      }
    }
    line = input.shift();
  }
  console.log(`The decrypted message is: ${decryptMsg}`);
}
imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
