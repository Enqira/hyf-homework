const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function findShortestWord(danishWords) {
  let shortestWord = danishWords[0];
  for (let i = 0; i < danishWords.length; i++) {
    if (shortestWord.length > danishWords[i].length) {
      shortestWord = danishWords[i];
    }
  }
  return shortestWord;
}
console.log(findShortestWord(danishWords));
