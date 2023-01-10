function pianist(input) {
  let countOfPieces = input.shift();
  let albumObject = {};

  let pieces = input.splice(0, countOfPieces);
  pieces.forEach((el) => {
    let [piece, composer, key] = el.split("|");
    if (!albumObject.hasOwnProperty(piece)) {
      albumObject[piece] = { composer, key };
    }
  });
  let line = input.shift();
  while (line !== "Stop") {
    let [command, piece, composer, key] = line.split("|");
    switch (command) {
      case "Add":
        if (albumObject.hasOwnProperty(piece)) {
          console.log(`${piece} is already in the collection!`);
          break;
        } else {
          albumObject[piece] = { composer, key };
          console.log(
            `${piece} by ${composer} in ${key} added to the collection!`
          );
        }
        break;
      case "Remove":
        if (albumObject.hasOwnProperty(piece)) {
          delete albumObject[piece];
          console.log(`Successfully removed ${piece}!`);
        } else {
          console.log(
            `Invalid operation! ${piece} does not exist in the collection.`
          );
        }
      case "ChangeKey":
        if (!albumObject[piece] === piece) {
          console.log(
            `Invalid Operation! ${piece} does not exist in the collection.`
          );
        } else if (albumObject.hasOwnProperty(piece)) {
          albumObject[piece].key = composer; // Key
          console.log(`Changed the key of ${piece} to ${composer}!`);
        }
    }
    line = input.shift();
  }
  let entries = Object.entries(albumObject);
  entries.forEach((el) => {
    console.log(`${el[0]} -> Composer: ${el[1].composer}, Key: ${el[1].key}`);
  });
}
// pianist([
//   "3",
//   "Fur Elise|Beethoven|A Minor",
//   "Moonlight Sonata|Beethoven|C# Minor",
//   "Clair de Lune|Debussy|C# Minor",
//   "Add|Sonata No.2|Chopin|B Minor",
//   "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
//   "Add|Fur Elise|Beethoven|C# Minor",
//   "Remove|Clair de Lune",
//   "ChangeKey|Moonlight Sonata|C# Major",
//   "Stop",
// ]);
pianist([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
