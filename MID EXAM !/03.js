function schoolLibrary(array) {
  let shelfOfBooks = array.shift().split("&");
  let currentInstruction = array.shift();

  while (currentInstruction !== "Done") {
    let splitedLines = currentInstruction.split("|");
    let command = splitedLines[0].trim();
    let firstBook = splitedLines[1].trim();

    switch (command) {
      case "Add Book":
        if (!shelfOfBooks.includes(firstBook)) {
          shelfOfBooks.unshift(firstBook);
        }
        break;
      case "Take Book":
        let index = shelfOfBooks.indexOf(firstBook);
        if (index > -1) {
          shelfOfBooks.splice(index, 1);
        }
        break;
      case "Swap Books":
        let secondBook = splitedLines[2].trim();
        let indexOfFirstBook = shelfOfBooks.indexOf(firstBook);
        let indexOfSecondBook = shelfOfBooks.indexOf(secondBook);
        if (indexOfFirstBook > -1 && indexOfSecondBook > -1) {
          shelfOfBooks[indexOfFirstBook] = secondBook;
          shelfOfBooks[indexOfSecondBook] = firstBook;
        }
        break;
      case "Insert Book":
        if (!shelfOfBooks.includes(firstBook)) {
          shelfOfBooks.push(firstBook);
        }
        break;
      case "Check Book":
        if (
          !isNaN(firstBook) &&
          Number(firstBook) > -1 &&
          shelfOfBooks.length > Number(firstBook)
        ) {
          console.log(shelfOfBooks[Number(firstBook)]);
        }
        break;
    }
    currentInstruction = array.shift();
  }
  console.log(shelfOfBooks.join(", "));
}
// // schoolLibrary([
// //   "Don Quixote&The Great Gatsby&Moby Dick",
// //   "Add Book | Ulysses",
// //   "Take Book | Don Quixote",
// //   "Insert Book | Alice's Adventures in Wonderland",
// //   "Done",
// ]);
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22", "Check Book | 2",
    "Take Book | David Copperfield",
    "Done"]);
    // Catch-22, Heart of Darkness, Anna Karenina, The Stranger
