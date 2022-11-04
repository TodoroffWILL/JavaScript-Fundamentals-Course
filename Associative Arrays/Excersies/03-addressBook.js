function addressBook(array) {
  let sortedAddressBook = {};

  array.forEach((element) => {
    let [name, address] = element.split(":");
    sortedAddressBook[name] = address;
  });

  let sortedArrayFromOBJ = Object.entries(sortedAddressBook);
  sortedArrayFromOBJ.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

  for (const entry of sortedArrayFromOBJ) {
    let [name, address] = entry;

    console.log(`${name} -> ${address}`);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
