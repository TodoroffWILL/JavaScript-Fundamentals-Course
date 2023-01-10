function serialize(input) {
  let word = input.shift().split("");
  let letters = [];

  for (let i = 0; i < word.length; i++) {
    if (!letters.includes(word[i])) {
      letters.push(word[i]);
    }
  }

  while (letters.length > 0) {
    let char = letters.shift();
    let indicies = [];

    for (let i = 0; i < word.length; i++) {
      if (char === word[i]) {
        indicies.push(i);
      }
    }
    console.log(`${char}:${indicies.join("/")}`);
  }
}
serialize(["abababa"]);
