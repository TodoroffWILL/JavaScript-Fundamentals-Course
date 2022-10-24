function burgerVan(array) {
    let citiesVisited = Number(array.shift());
    let arrayLength = array.length;
    let totalProfit = 0;
    let currentVisited = 1;
    for (let i = 0; i < arrayLength; i += 3) {
     
        let city = array[i];
        let income = Number(array[i + 1]);
        let expenses = Number(array[i + 2]);
     
      if (currentVisited % 3 == 0) {
          expenses = expenses + (expenses *0.5);
          let actualProfit = income-expenses;
          totalProfit +=actualProfit;
          console.log(`In ${city} Burger Bus earned ${actualProfit.toFixed(2)} leva.`);
        
      } else if (currentVisited % 5 == 0) {
        let actualIncome = income - (income*0.1);
        let actualProfit =  actualIncome - expenses;
        // let actualProfit  = profit -  (profit * 0.1);
        totalProfit += actualProfit;
        console.log(`In ${city} Burger Bus earned ${actualProfit.toFixed(2)} leva.`);
      } else{
        let actualProfit =  income - expenses;
        totalProfit += actualProfit;
        console.log(`In ${city} Burger Bus earned ${actualProfit.toFixed(2)} leva.`);
      }

      currentVisited++;
  
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)
  }
burgerVan([
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
]);
