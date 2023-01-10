function activationKeys(input) {
  let rawKey = input.shift();
  let line = input.shift();

  while (line !== "Generate") {
    let [command, ...rest] = line.split(">>>");

    switch (command) {
      case "Slice":
        let [startIndex, endIndex] = rest;
        rawKey = rawKey.substring(0, startIndex) + rawKey.substring(endIndex);
        console.log(rawKey);
        break;
      case "Flip":
        let [cmd, fromIndex, toIndex] = rest;
        if (cmd == "Upper") {
          rawKey =
            rawKey.substring(0, fromIndex) +
            rawKey.substring(fromIndex, toIndex).toUpperCase() +
            rawKey.substring(toIndex);
          console.log(rawKey);
        } else {
          rawKey =
            rawKey.substring(0, fromIndex) +
            rawKey.substring(fromIndex, toIndex).toLowerCase() +
            rawKey.substring(toIndex);
          console.log(rawKey);
        }
        break;
      case "Contains":
        let [toCheck] = rest;
        if (rawKey.includes(toCheck)) {
          console.log(`${rawKey} contains ${toCheck}`);
        } else {
          console.log(`Substring not found!`);
        }
    }
    line = input.shift();
  }
  console.log(`Your activation key is: ${rawKey}`);
}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
