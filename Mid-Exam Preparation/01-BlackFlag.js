function blackFlag(arr) {
  const days = Number(arr.shift()); // Дни за плячкосване
  const dailyPlunder = Number(arr.shift()); // Дневна печалба
  const target = Number(arr.shift()); // Таргет за плячкосване

  let totalPlunder = 0;

  for (let i = 1; i <= days; i++) {
    totalPlunder += dailyPlunder;
    // 3th Day
    if (i % 3 == 0) {
      totalPlunder += dailyPlunder / 2;
    }
    // 5th Day
    if (i % 5 == 0) {
      totalPlunder *= 0.7;
    }
  }
  // Print output
  if (totalPlunder >= target) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentLeft = (totalPlunder / target) * 100;
    console.log(`Collected only ${percentLeft.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["5", "40", "100"]);
