function storage(storage) {
  let obj = {};

  storage.forEach((el) => {
    let [item, quantity] = el.split(" ");
    quantity = Number(quantity);
    if (!obj.hasOwnProperty(item)) {
      obj[item] = quantity;
    } else {
      obj[item] += quantity;
    }
  });
  console.log(obj);
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
