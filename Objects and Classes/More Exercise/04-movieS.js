function movies(arr) {
  let movieInfo = [];

  arr.forEach((element) => {
    if (element.includes("addMovie ")) {
      let name = element.split("addMovie ")[1];
      movieInfo.push({ name });
    } else if (element.includes("directedBy")) {
      let [searchName, foundDirector] = element.split(" directedBy ");
      let movie = movieInfo.find((el) => el.name === searchName);
      if (movie) {
        movie.director = foundDirector;
      }
    } else if (element.includes("onDate")) {
      let [searchName, providedDate] = element.split(" onDate ");
      let movie = movieInfo.find((el) => el.name === searchName);
      if (movie) {
        movie.date = providedDate;
      }
    }
  });
  movieInfo.forEach((movie) => {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  });
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
