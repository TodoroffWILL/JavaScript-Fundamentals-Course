function city(info) {
  for (const keys of Object.keys(info)) {
    console.log(`${keys} -> ${info[keys]}`);
  }
}

city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
