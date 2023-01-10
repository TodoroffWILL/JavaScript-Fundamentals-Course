let literalPattern = /(?<funcName>\w+)\(\)/g;
let text =
  "When you want to know whether a pattern is found in a string, use the test() or search() methods; for more information (but slower execution) use the exec() or match() methods. If you use exec() or match() and if the match succeeds, these methods return an array and update properties of the associated regular expression object and also of the predefined regular expression object, RegExp. If the match fails, the exec() method returns null (which coerces to false) test()";

let match = literalPattern.exec(text);
// console.log(match[0]);
// match = literalPattern.exec(text);
// console.log(match[0]);
// match = literalPattern.exec(text);
// console.log(match[0]);
// match = literalPattern.exec(text);

// Run All Matches
while (match) {
  console.log(match.groups.funcName);
  // named capturing group
  console.log(`Found ${match[0]} on index ${match.index} - ${match[1]}`);
  //Number capturing group
  match = literalPattern.exec(text);
}
