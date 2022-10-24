function sortArrBy2Criterias(array) {
  let sortedArray = array.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });

  console.log(sortedArray.join("\n"));
}
sortArrBy2Criterias(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
