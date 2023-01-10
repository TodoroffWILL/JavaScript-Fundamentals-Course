function deserialize(input) {
  let newArr = [];
  let cmd = input.shift();

  while (cmd !== "end") {
    let char = cmd.split(":");
    let nums = char[1].split("/");

    nums.forEach((num) => {
      newArr[num] = char[0];
    });

    cmd = input.shift();
  }
  let joined = newArr.join("");
  console.log(joined);
}
deserialize(["a:0/2/4/6", "b:1/3/5", "end"]);
deserialize([
  "a:0/3/5/11",

  "v:1/4",

  "j:2",

  "m:6/9/15",

  "s:7/13",

  "d:8/14",

  "c:10",

  "l:12",

  "end",
]);
