/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const compliance = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let prev;
  let current;
  let result = 0;
  const revertedS = s.split("").reverse().join("");

  for (let i = 0; i < revertedS.length; i++) {
    current = compliance[revertedS[i]];
    if (current < prev) {
      result -= current;
    } else {
      result += current;
    }

    prev = current;
  }

  return result;
};

// Runtime 122 ms / Memory 55.06 mb

console.log(romanToInt("MXCLIV"));
