/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const obj = { "(": ")", "{": "}", "[": "]" };
  const array = [];

  if (s.length % 2 !== 0) {
    return false;
  }

  for (const bracket of s) {
    if (bracket in obj) {
      array.push(bracket);
    } else if (array.length === 0 || obj[array.pop()] !== bracket) {
      return false;
    }
  }

  return array.length === 0;
};

// Runtime 59 ms / Memory 49.84 mb

console.log(isValid("()[]{}"));
console.log(isValid("(]{}"));
console.log(isValid("[}"));
