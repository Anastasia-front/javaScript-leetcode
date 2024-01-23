/**
 * @param {string[]} strings
 * @return {string}
 */
var longestCommonPrefix = function (strings) {
  if (!strings.length) {
    return "";
  }

  const minLen = Math.min(...strings.map((s) => s.length));

  for (let i = 0; i < minLen; i++) {
    if (!strings.every((s) => s[i] === strings[0][i])) {
      return strings[0].substring(0, i);
    }
  }

  return strings[0].substring(0, minLen);
};

// Runtime 59 ms / Memory 49.06 mb
console.log(longestCommonPrefix(["hghg", "hghe", "hgre"]));
console.log(longestCommonPrefix(["trew", "trewq", "trewqa"]));