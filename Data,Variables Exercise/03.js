function rightPlace(first, char, result) {
  let res = first.replace("_", char);

  let output = res === result ? "Matched" : "Not Matched";

  console.log (output);
}

rightPlace("Str_ng", "I", "Strong");
