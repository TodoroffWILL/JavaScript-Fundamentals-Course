function usersInfo(list) {
  let result = {};

  list.forEach((element) => {
    const [companyName, personId] = element.split(" -> ");

    if (!result.hasOwnProperty(companyName)) {
      result[companyName] = [];
    }
    result[companyName].push(personId);
  });
  let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
  sorted.forEach((el) => {
    const companyNames = el[0];
    const allIds = el[1];
    console.log(companyNames);
    let uniqueID = new Set(allIds);
    for (const id of uniqueID) {
      console.log(`-- ${id}`);
    }
  });
}
usersInfo([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
