function treasureFinder(input) {
  let key = input.shift().split(" ");

  while (key !== "find") {

    

    console.log(key);
    key = input.shift();
  }
}
treasureFinder([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]);
