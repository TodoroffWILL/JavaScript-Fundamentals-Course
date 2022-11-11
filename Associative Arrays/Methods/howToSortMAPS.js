let phoneBook = new Map();

phoneBook.set("adelin", "24652456");
phoneBook.set("pesho", "205893208");
phoneBook.set("gosho", "235235235");
phoneBook.set("ivann", "456456456");

let phoneBookEntries = Array.from(phoneBook.entries());

phoneBookEntries.sort((entryA, entryB) => entryA[0].localeCompare(entryB[0]));
console.log(phoneBookEntries);
