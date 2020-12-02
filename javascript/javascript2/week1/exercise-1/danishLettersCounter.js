const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function countDanishLetters(danishString) {
  let result = { total: 0 };
  let å = 0,
    ø = 0,
    æ = 0;

  for (let i = 0; i < danishString.length; i++) {
    if (danishString[i] === "å") {
      if ("å" in result) {
        result.å++;
      } else {
        result.å = 1;
      }
      result.total++;
    } else if (danishString[i] === "æ") {
      if ("æ" in result) {
        result.æ++;
      } else {
        result.æ = 1;
      }
      result.total++;
    } else if (danishString[i] === "ø") {
      if ("ø" in result) {
        result.ø++;
      } else {
        result.ø = 1;
      }
      result.total++;
    }
  }
  return result;
}

console.log(countDanishLetters(danishString)); // returns {total: 1, å: 1}
console.log(countDanishLetters(danishString2));
