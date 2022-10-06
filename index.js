const en_dict = require("./dictionary/en/dict");

const enSyllableChecker = (word) => {
  return en_dict[word];
};

module.exports = { enSyllableChecker };
