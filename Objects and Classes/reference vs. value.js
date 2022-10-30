let name = "Doncho";

function changedName(name) {
  name = "Adelin";
}
changedName(name);

console.log(name);

console.log("!---Pass reference to function---!"); 
// pass reference to function

function changeInfo(info) {
  info.name = "Adelin";
}
let info = { name: "Doncho", age: 26 };
changeInfo(info);

console.log(info.name);



