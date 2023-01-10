function solve(input) {
  let numberOfArtists = Number(input.shift());
  let artistsArr = input.splice(0, numberOfArtists);
  const objectOfArtist = {};

  for (const line of artistsArr) {
    let [song, artist, type] = line.split("|");

    if (!objectOfArtist.hasOwnProperty(artist)) {
      objectOfArtist[artist] = {song,type}
    }
  }
  console.log(objectOfArtist);
}

solve([
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
