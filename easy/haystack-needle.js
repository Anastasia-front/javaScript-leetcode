/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const lengthHaystack = haystack.length;
  const lengthNeedle = needle.length;
  const difference = lengthHaystack - lengthNeedle;

  if (lengthNeedle === 0) {
    return -1;
  }

  for (let index = 0; index < difference + 1; index++) {
    if (haystack.slice(index, index + lengthNeedle) === needle) {
      return index;
    }
  }

  return -1;
};

// Runtime 56 ms / Memory 49.36 mb

const result = strStr((haystack = "sadbutsad"), (needle = "sad"));
console.log(result);

const result1 = strStr((haystack = "leetcode"), (needle = "leeto"));
console.log(result1);

const result2 = strStr((haystack = "hello"), (needle = "ll"));
console.log(result2);

const result3 = strStr((haystack = "mississippi"), (needle = "issip"));
console.log(result3);
