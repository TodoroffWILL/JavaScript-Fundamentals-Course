function sumFirstandLast(arr) {
  let firstElement = Number(arr.pop());
  let lastElement = Number(arr.shift());

  let result = firstElement + lastElement;

  console.log(result);
}
sumFirstandLast(["20", "30", "40"]);
