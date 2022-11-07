function minerTask(input) {
  let collection = {};

  for (let i = 0; i < input.length; i += 2) {
    const resourse = input[i];
    const quantity = Number(input[i + 1]);

    if (!collection.hasOwnProperty(resourse)) {
      collection[resourse] = 0;
    }
    collection[resourse] += quantity;
  }
  for (const key in collection) {
    console.log(`${key} -> ${collection[key]}`);
  }
}
minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
