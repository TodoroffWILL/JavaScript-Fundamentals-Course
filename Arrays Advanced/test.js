function test() {
  let arr = [1, 2, 3, 4, 5, 6, 7];

  let newOne = arr.splice(2, 5);
  console.log(newOne);
  let newTwo = arr.slice(0,2)
  console.log(newTwo);
}
test ();
