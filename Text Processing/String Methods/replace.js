let text = "Doncho is a bit confused but will get there, Doncho.";

// Replace FIRST Occurance of the word Doncho
let replacedName = text.replace("Doncho", "Eva");
console.log(replacedName);

// Replace ALL NAMES 

let replaceAllNames = text;
while (replaceAllNames.indexOf("Doncho") >= 0) {
  replaceAllNames = replaceAllNames.replace("Doncho", "Eva");
}
console.log(replaceAllNames);
