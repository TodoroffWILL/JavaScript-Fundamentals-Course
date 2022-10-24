function lastkNumbersSequance(length, k) {
  let sequence = [1];

  for (let i = 1; i < length; i++) {
    let index = Math.max(sequence.length - k, 0);
    let lastElements = sequence.slice(index);
    let sum = 0;
    for (const i of lastElements) {
      sum += i;
    }
    sequence.push(sum);

    
  }
  console.log(sequence.join (" "));
}
lastkNumbersSequance(6, 3);
