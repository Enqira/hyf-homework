const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function countDanishLetters(danishString) {
  let result = { total: 0 };
  let å = 0;
  let æ = 0;
  let ø = 0;
  for (let i = 0; i < danishString.length; i++) {
    if (danishString[i] === "å") {
      if (result.hasOwnProperty("å")) {
        result.å++;
        result.total++;
      } else {
        result.å = 1;
        result.total++;
      }
    }
    if (danishString[i] === "æ") {
      if (result.hasOwnProperty("æ")) {
        result.æ++;
        result.total++;
      } else {
        result.æ = 1;
        result.total++;
      }
    }
    if (danishString[i] === "ø") {
      if (result.hasOwnProperty("ø")) {
        result.ø++;
        result.total++;
      } else {
        result.ø = 1;
        result.total++;
      }
    }
  }
  return result;
}

console.log(countDanishLetters(danishString)); // returns {total: 1, å: 1}
console.log(countDanishLetters(danishString2));
