function passReset(input) {
  let rawPassword = input.shift();
  let line = input.shift();

  while (line !== "Done") {
    let [command, ...rest] = line.split(" ");
    let newPass = "";
    switch (command) {
      case "TakeOdd":
        for (let i = 0; i < rawPassword.length; i++) {
          if (i % 2 === 1) {
            newPass += rawPassword[i];
          }
        }
        rawPassword = newPass;
        console.log(rawPassword);
        break;
      case "Cut":
        let [startIndex, length] = rest;
        startIndex = Number(startIndex);
        length = Number(length);
        let isValidLength = startIndex + length;
        if (isValidLength <= rawPassword.length) {
          rawPassword =
            rawPassword.substring(0, startIndex) +
            rawPassword.substring(isValidLength);
        } else {
          break;
        }

        console.log(rawPassword);
        break;
      case "Substitute":
        let [cmd1, cmd2] = rest;
        if (rawPassword.includes(cmd1)) {
          while (rawPassword.includes(cmd1)) {
            rawPassword = rawPassword.replace(cmd1, cmd2);
          }
          console.log(rawPassword);
        } else {
          console.log("Nothing to replace!");
        }
    }
    line = input.shift();
  }
  console.log(`Your password is: ${rawPassword}`);
}
passReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
