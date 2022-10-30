function storeProvision(inStore, orderDelivery) {
  const storedProducts = {};
  const inStoreLength = inStore.length; // inStore length
  const orderDeliveryLength = orderDelivery.length; // orderDelivery length

  for (let i = 0; i < inStoreLength; i += 2) {
    const currentProduct = inStore[i];
    storedProducts[currentProduct] = Number(inStore[i + 1]);
  }
  for (let i = 0; i < orderDeliveryLength; i += 2) {
    const currentProduct = orderDelivery[i];

    if (!storedProducts.hasOwnProperty(currentProduct)) {
      storedProducts[currentProduct] = 0;
    }
    storedProducts[currentProduct] += Number(orderDelivery[i + 1]);
  }

  for (const key in storedProducts) {
    console.log(`${key} -> ${storedProducts[key]}`);
  }

  //   storedProducts.forEach((product) => {
  //     console.log(`${product} -> ${storedProducts[product]}`);
  //   });
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
