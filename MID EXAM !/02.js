function numbers(array) {
  let sequenceOfNums = array.shift().split(" ").map(Number);
  let currentInstruction = array.shift();

  while (currentInstruction !== "Finish") {
    let splitInstructions = currentInstruction.split(" ");
    let command = splitInstructions[0];
    let firstNum = Number(splitInstructions[1]);

    switch (command) {
      case "Add":
        sequenceOfNums.push(firstNum);
        break;
      case "Remove":
        let index = sequenceOfNums.indexOf(firstNum);
        sequenceOfNums.splice(index, 1);
        break;
      case "Replace":
        let secondNum = Number(splitInstructions[2]);
        let indexToReplace = sequenceOfNums.indexOf(firstNum);

        if (indexToReplace > -1) {
          sequenceOfNums[indexToReplace] = secondNum;
        }

        break;
      case "Collapse":
        sequenceOfNums = sequenceOfNums.filter((x) => x >= firstNum);
        break;
    }

    currentInstruction = array.shift();
  }
  console.log(sequenceOfNums.join(" "));
}
numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
numbers(["1 20 -1 10", "Collapse 8", "Finish"]);
