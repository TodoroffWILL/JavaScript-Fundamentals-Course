function test(array) {
  let citiesVisited = Number(array.shift());
  let arrayLength = array.length;

  let totalProfit = 0;
  for (let i = 0; i < arrayLength; i += 3) {
    let city = array[i];
    let income = Number(array[i + 1]);
    let expenses = Number(array[i + 2]);

    let dailyProfit = 0;

    if (citiesVisited % 3 == 0) {
      expenses = expenses + expenses * 0.5;
      let dailyProfit = income - expenses;
      console.log(`In ${city} Burger Bus earned ${dailyProfit}`);
    }
    if (citiesVisited % 5 == 0) {
      totalProfit = totalProfit - totalProfit * 0.1;
      console.log(`In ${city} Burger Bus earned ${dailyProfit}`);
    }
  }
  console.log(`Burger Bus total profit: ${totalProfit}`);
}

test([
  "3",
  "Sofia",
  "895.67",
  "213.50",
  "Plovdiv",
  "2563.20",
  "890.26",
  "Burgas",
  "2360.55",
  "600.00",
])
