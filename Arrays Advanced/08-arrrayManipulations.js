function solve(commands) {
  let arr = commands.shift().split(" ").map(Number);
  let commandsLength = commands.length;
  for (let i = 0; i < commandsLength; i++) {
    let [command, firstNum, secondNum] = commands[i].split(" ");

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch (command) {
      case "Add":
        add(firstNum); // Push element in the back of the Array
        break;
      case "Remove":
        remove(firstNum); // Removes element from the Array
        break;
      case "RemoveAt":
        removeAt(firstNum); //Remove element of INDEX of Array
        break;
      case "Insert":
        insert(firstNum, secondNum); // Replace element with a new one in Array
        break;
    }
  }
  function add(el) {
    arr.push(el);
  }
  function remove(num) {
    arr = arr.filter((el) => el !== num);
  }
  function removeAt(index) {
    arr.splice(index, 1);
  }
  function insert(num, index) {
    arr.splice(index, 0, num);
  }
  console.log(arr.join(" "));
}

solve(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);
