/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const lastWord = s.trim().split(" ")[s.trim().split(" ").length - 1];
  return lastWord.length;
};

// Runtime 51 ms / Memory 48.86 mb
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("fluffy is still boy"));
