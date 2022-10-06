const { enSyllableChecker } = require("./index.js");

describe("English Syllable Checker", () => {
  test("It should find the syllable count of words", () => {
    expect(enSyllableChecker("cat")).toBe(1);
    expect(enSyllableChecker("able")).toBe(2);
    expect(enSyllableChecker("adequately")).toBe(4);
  });
  test("It should find the syllable count of words with caps", () => {
    expect(enSyllableChecker("Cat")).toBe(1);
    expect(enSyllableChecker("Able")).toBe(2);
    expect(enSyllableChecker("Adequately")).toBe(4);
  });
});
