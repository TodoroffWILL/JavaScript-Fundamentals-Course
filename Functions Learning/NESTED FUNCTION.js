function printCertificate(grade, names) {
  // GET Formated grade
  let formatedGrade = formatGrade(grade);
  // GET the full name
  let fullName = printFullName(names);
 // Printing the HEADER
  printHeader();
  console.log(fullName);
  console.log(formatedGrade);
}
printCertificate(5.25, ["Peter", "Carter"]);

function printFullName(names) {
  return `${names[0]} ${names[1]}`;
}

function printHeader() {
  console.log(`~~~-  {@}  -~~~`);
  console.log(`~- Certificate -~`);
  console.log(`~~~-  ~---~  -~~~`);
}

function formatGrade(grade) {
  let gradeName = "";

  if (grade < 3) {
    gradeName = "Fail";
  } else if (grade < 3.5) {
    gradeName = "Poor";
  } else if (grade < 4.5) {
    gradeName = "Good";
  } else if (grade < 5.5) {
    gradeName = "Very good";
  } else {
    gradeName = "Excellent";
  }
  if (gradeName == "Fail") {
    return `${grade} (2)`;
  } else {
    return `${gradeName} (${grade.toFixed(2)})`;
  }
}
