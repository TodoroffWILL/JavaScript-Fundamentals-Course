let phoneBook = {
  doncho: "3463459345",
  eva: "2696964593",
  dora: "123123123",
  adelin: "01255212555",
};

// Convert associative ARRAY to normal ARRAY
let phoneBookEntries = Object.entries(phoneBook); // Makes an array with Key,Value
// Sort the array by letters !
phoneBookEntries.sort((entryA, entryB) => entryA[0].localeCompare(entryB[0]));
phoneBookEntries.sort(([keyA], [keyB]) => keyA.localeCompare(keyB)); // SAME AS THE ABOVE. Достъпваме Масива!
console.log(phoneBookEntries);
// Optional: Convert back to AA
let sortedPhoneBook = Object.fromEntries(phoneBookEntries);
console.log(sortedPhoneBook); // CONVERTS BACK THE AA TO OBJECT !
