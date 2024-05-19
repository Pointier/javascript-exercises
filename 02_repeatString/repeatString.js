const repeatString = function (word, numberOfRepeat) {
  if (numberOfRepeat < 0) return "ERROR";
  let repeatedWord = "";

  for (let i = 0; i < numberOfRepeat; i++) {
    repeatedWord = repeatedWord + word;
  }
  return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
