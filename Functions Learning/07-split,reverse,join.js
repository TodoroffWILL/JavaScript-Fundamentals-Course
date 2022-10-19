function palindromeIntegers(palindromeNums) {
  let palindromeNumsLength = palindromeNums.length;

  for (let i = 0; i < palindromeNumsLength; i++) {
    let numAsString = palindromeNums[i].toString();
    let reversedString = numAsString.split("").reverse().join("");

    if (numAsString === reversedString) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
palindromeIntegers([123, 323, 421, 121]);
