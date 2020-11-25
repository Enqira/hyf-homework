const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function findShortestWord(danishWords) {
  let shortestWord = "";
  for (let i = 0; i < danishWords.length; i++) {
    if (shortestWord === "") {
      shortestWord = danishWords[i];
      console.log(shortestWord.length);
    } else if (shortestWord.length > danishWords[i].length) {
      shortestWord = danishWords[i];
    }
  }
  return shortestWord;
}
console.log(findShortestWord(danishWords));
