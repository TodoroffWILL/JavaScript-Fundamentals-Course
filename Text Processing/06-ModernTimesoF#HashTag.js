function hashTag(sentece) {
  const words = sentece.split(" ");
  

  words.forEach((el) => {
    if (el.startsWith("#") && el.length > 1) {
      let isLetter = true;
      let temp = "";

      for (let i = 1; i < el.length; i++) {
        const char = el[i].toLowerCase();
        if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
          isLetter = false;
          break;
        } else {
          temp += el[i];
        }
      }
      if (isLetter) {
        console.log(temp);
      }
    }
  });
}
hashTag("Nowadays everyone uses # to tag a #special word in #socialMedia");
