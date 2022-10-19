function matrix(num) {
  let rowGenerator = () => {
    let singleRow = "";
    for (let j = 0; j < num; j++) {
      singleRow += `${num} `;
    }
    return singleRow;
  };

  for (let i = 0; i < num; i++) {
    console.log(rowGenerator());
  }
} 
matrix(3);
