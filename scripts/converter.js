var fs = require("fs");
const nReadlines = require("n-readlines");

const convertDictionaryEnMyph = () => {
  // const delim = "•";
  const enMhyphLines = new nReadlines(
    "../dictionary-sources/en/mhyph-utf-8-n.txt"
  );
  const delim = "•"; // String.fromCharCode(37);
  // const delim = String.fromCharCode(0xa5);
  var writer = fs.createWriteStream("../dictionary/en/dict.js", {
    flags: "a", // 'a' means appending (old data will be preserved)
  });
  writer.write("module.exports = {");
  while ((line = enMhyphLines.next())) {
    const wordRaw = line.toString("utf-8");
    const arr = wordRaw.split(delim);
    const syallableCount = arr.length;
    const word = arr.join("");
    //console.log(arr);
    //console.log(`${word}:${syallableCount}`);
    writer.write(`  "${word.toLowerCase()}": ${syallableCount},`);
  }
  writer.write("}");
  writer.close();
};

convertDictionaryEnMyph();
