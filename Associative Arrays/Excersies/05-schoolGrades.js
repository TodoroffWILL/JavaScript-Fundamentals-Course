function schoolGrades(list) {
  let students = {};

  for (let line of list) {
    let splitedArr = line.split(" ");
    let names = splitedArr[0];
    let grades = splitedArr.splice(1, splitedArr.length).map(Number);

    if (!students.hasOwnProperty(names)) {
      students[names] = grades;
    } else {
      let newGrades = students[names].concat(grades);
      students[names] = newGrades;
    }
  }
  let sortedStudents = Object.entries(students);
  sortedStudents.sort((a, b) => a[0].localeCompare(b[0]));

  for (const el of sortedStudents) {
    let sum = 0;
    let grades = el[1];
    grades.forEach((element) => {
      sum += element;
    });
    let avg = sum / grades.length;
    console.log(`${el[0]}: ${avg.toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
