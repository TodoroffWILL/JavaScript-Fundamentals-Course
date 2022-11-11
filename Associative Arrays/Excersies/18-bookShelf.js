function bookShelf(info) {
  let shelfOfBooks = {};

  info.forEach((el) => {
    if (el.includes("->")) {
      let [id, genre] = el.split("->");
      let trimId = id.trim();
      let trimGenre = genre.trim();

      if (!shelfOfBooks.hasOwnProperty(trimId)) {
        shelfOfBooks[trimId] = { genre: trimGenre, books: [] };
      }
    } else {
      let [bookTitle, bookAuthorAndGenre] = el.split(":");
      let [bookAutor, genre] = bookAuthorAndGenre.split(",");

      let bTitle = bookTitle.trim();
      let bAutor = bookAutor.trim();
      let trimGenre = genre.trim();

      for (const key in shelfOfBooks) {
        let currentShelf = shelfOfBooks[key];
        if (currentShelf["genre"] === trimGenre) {
          currentShelf["books"].push([bTitle, bAutor]);
        }
      }
    }
  });
  let sorted = Object.entries(shelfOfBooks);
  sorted.sort((a, b) => b[1]["books"].length - a[1]["books"].length);

  sorted.forEach((el) => {
    sorted = el[1]["books"].sort((a, b) => a[0].localeCompare(b[0]));
    console.log(`${el[0]} ${el[1]["genre"]}: ${el[1]["books"].length}`);
    el[1]["books"].forEach((el) => {
      console.log(`--> ${el[0]}: ${el[1]}`);
    });
  });
}
bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 ->mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 ->romance",
  "Effect of the Void: Shay B,romance",
  "Losing Dreams: Gail Starr,sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay,history",
]);

// let x = { 1: { 2: ["scifi", "mystery"] } };
// let y = 1;
// console.log(x[1][2][1]);
