function solve(args) {
  let counter = 0;

  for (let i = 0; i < args.length - 1; i++) {
    for (let j = 1; j < args[i].length; j++) {
      if (args[i][j] == args[i + 1][j]) {
        counter++;
      }
      if (args[i][j] == args[i][j - 1]) {
        counter++;
      }
    }
  }

  for (let i = 0; i < args[args.length - 1].length; i++) {
    if (args[args.length - 1][i] == args[args.length - 1][i + 1]) {
      counter++;
    }
  }

  for (let i = 0; i < args.length - 1; i++) {
    if (args[i][0] == args[i + 1][0]) {
      counter++;
    }
  }

  console.log(counter);
}
solve([
  ["2", "3", "4", "7", "0"],

  ["4", "0", "5", "3", "4"],

  ["2", "3", "5", "4", "2"],

  ["9", "8", "7", "5", "4"],
]);
