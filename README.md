## Syallable Checker

The purpose of this project is to create a simple library for Javascript to check the number of syllables in a word.

For example:

    const {enSyllableChecker} = require("syllable-checker")
    console.log(enSyllableChecker.check("Hello"));
    // 2
    console.log(enSyllableChecker.check("adequately"));
    // 4

Inspiration for this project comes from [http://delphiforfun.org/programs/WordStuff1.htm](http://delphiforfun.org/programs/WordStuff1.htm)

The English dictionary located at [dictionary-sources/en/mhyph.txt](dictionary-sources/en/mhyph.txt) was downloaded from Project Gutenberg at [Moby Hyphenation List by Grady Ward](https://www.gutenberg.org/ebooks/3204)
