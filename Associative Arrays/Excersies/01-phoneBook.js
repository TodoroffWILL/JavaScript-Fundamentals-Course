function printPhoneBook(list) {
  let phoneBook = {};
  list.forEach((entry) => {
    let [name, phone] = entry.split(" "); // Tim , 081258251125;
    phoneBook[name] = phone;
  });

  for (const name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
  }
}

printPhoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
