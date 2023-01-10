function passValidator(input) {
  let rawPassword = input.shift();
  let line = input.shift();

  while (line !== "Complete") {
    let [command, ...rest] = line.split(" ");

    switch (command) {
      case "Make":
        let [cmd, indexToReplace] = rest;
        indexToReplace = Number(indexToReplace);
        if (cmd == "Upper") {
          rawPassword = rawPassword.replace(
            rawPassword[indexToReplace],
            rawPassword[indexToReplace].toUpperCase()
          );
          console.log(rawPassword);
        } else if (cmd == "Lower") {
          rawPassword = rawPassword.replace(
            rawPassword[indexToReplace],
            rawPassword[indexToReplace].toLowerCase()
          );
          console.log(rawPassword);
        }

        break;
      case "Insert":
        let [indexToInsertIn, char] = rest;
        if (indexToInsertIn >= 0 && indexToInsertIn < rawPassword.length) {
          rawPassword =
            rawPassword.substring(0, indexToInsertIn) +
            char +
            rawPassword.substring(indexToInsertIn);
          console.log(rawPassword);
        }
        break;
      case "Replace":
        let [charToReplace, valueOfChar] = rest;
        valueOfChar = Number(valueOfChar);
        let asci = charToReplace.charCodeAt(0);
        let newSymbol = asci + valueOfChar;
        newSymbol = String.fromCharCode(newSymbol);
        if (rawPassword.includes(charToReplace)) {
          while (rawPassword.includes(charToReplace)) {
            rawPassword = rawPassword.replace(charToReplace, newSymbol);
          }
          console.log(rawPassword);
        }
        break;
      case "Validation":
        if (rawPassword.length < 8) {
          console.log("Password must be at least 8 characters long! ");
        }
        if (!/^[a-zA-Z0-9_.-]+$/.test(rawPassword)) {
          console.log("Password must consist only of letters, digits and _!");
        }
        if (!/[A-Z]/.test(rawPassword)) {
          console.log("Password must consist at least one uppercase letter!");
        }
        if (!/[a-z]/.test(rawPassword)) {
          console.log("Password must consist at least one lowercase letter!");
        }
        if (!/\d/.test(rawPassword)) {
          console.log(`Password must consist at least one digit!`);
        }
        break;
      default:
        break;
    }

    line = input.shift();
  }
}
// passValidator([
//   "invalidpassword*",
//   "Add 2 p",
//   "Replace i -50",
//   "Replace * 10",
//   "Make Upper 2",
//   "Validation",
//   "Complete",
// ]);
passValidator([
  "lasd@",
  "Insert 3 W",
  "Add 2 p",

  "Validation",

  "Make Lower 3",

  "Complete",
  ,
]);
