let phoneBook = {
  doncho: 3463459345,
  eva: 12696964593,
  dora: 123123123,
  adelin: 01255212555,
};

let phoneBookArr = Object.entries(phoneBook); // Returns keys,value pairs AS ARRAY !

// for (const keywithpair of phoneBookArr) {
//   let name = keywithpair[0]; // name from array,
//   let phone = keywithpair[1]; // phone numb from array
//   console.log(`${name} -> ${phone}`);
// }

// SHORTER VERSION

for (const keywithpair of Object.entries(phoneBook)) {
  // SHORTER VERSION
  let [name, phone] = keywithpair;
  console.log(`${name} -> ${phone}`);
}
// EVEN SHORTER VERSION
for (let [name, phone] of Object.entries(phoneBook)) {
  // SAME AS ABOVE BUT SHORTER !!!
  console.log(`${name} -> ${phone}`);
}
