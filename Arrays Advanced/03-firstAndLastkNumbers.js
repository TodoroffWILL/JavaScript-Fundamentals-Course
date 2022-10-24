function firstAndLastkNumbers(array) {
  let count = array.shift();

  let firstElements = array.slice(0, count); // TAKES [0] till [2] but EXCLUDES [2] element of array
  let lastElements = array.slice(array.length - count);

  console.log(firstElements.join(" "));
  console.log(lastElements.join(" "));
}
firstAndLastkNumbers([2, 7, 8, 9]);
