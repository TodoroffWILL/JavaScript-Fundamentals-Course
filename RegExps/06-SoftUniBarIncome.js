function barIncome(customers) {
  let pattern =
    /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d)+\|(?<price>[\d]+[.]*\d+)\$/gm;
  let totalIncome = 0;
  let command = customers.shift();

  while (command !== "end of shift") {
    let currData = pattern.exec(command);

    if (currData) {
      const currCustomer = currData.groups.customer;
      const currProduct = currData.groups.product;
      const currCount = Number(currData.groups.count);
      const currPrice = Number(currData.groups.price);

      const totalProductPrice = currCount * currPrice;

      console.log(
        `${currCustomer}: ${currProduct} - ${totalProductPrice.toFixed(2)}`
      );
      totalIncome += totalProductPrice;
    }
    command = customers.shift();
    currData = pattern.exec(command);
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
barIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
