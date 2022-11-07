function theOddOccurences(words) {
  let resultOBJ = {};
  let allWords = words.split(" ").map((w) => w.toLowerCase());

  let allWordsLength = allWords.length;

  for (let i = 0; i < allWordsLength; i++) {
    if (!resultOBJ.hasOwnProperty(allWords[i])) {
      resultOBJ[allWords[i]] = [];
    }
    resultOBJ[allWords[i]].push(i);
  }
  let sorted = Object.entries(resultOBJ).sort((a, b) => a[1][0] - b[1][0]);
  let result = "";
  for (const el of sorted) {
    if (el[1].length % 2 !== 0) {
      result += `${el[0]} `;
    }
  }
  console.log(result);
}
theOddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
