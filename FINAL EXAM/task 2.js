function bossRush(input) {
  let pattern =
    /([|])(?<boss>[A-Z]{4,})\1:[#](?<title>[A-Za-z]+ [A-Z-a-z]+)[#]/;
  input.shift();
  input.forEach((line) => {
    if (pattern.test(line)) {
      let matched = line.match(pattern);
      let strength = matched.groups.boss.length;
      let armor = matched.groups.title.length;

      console.log(
        `${matched[2]}, The ${matched[3]}\n>> Strength: ${strength}\n>> Armor: ${armor}`
      );
    } else {
      console.log(`Access denied!`);
    }
  });
}
bossRush([
  "3",
  "|PETER|:#Lead architect#",
  "|GEORGE|:#High Overseer#",
  "|ALEX|:#Assistant Game Developer#",
]);
