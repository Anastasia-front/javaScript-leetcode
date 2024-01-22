/**
 * @param {number} x
 * @return {boolean}
 */

// as string
var isPalindrome = function (x) {
  const str = String(x);
  return str === str.split("").reverse().join("");
};
// Runtime 150 ms / Memory 59.22 mb
console.log('isPalindrome with solution as string - Runtime 150 ms / Memory 59.22 mb')
console.log(isPalindrome(999))


// as number
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x>0 && x < 12 && x!==10) return true;

  const original = x;
  let reverseNum = 0;
  let digit;
  while (x > 0) {
    digit = x % 10;
    reverseNum = reverseNum * 10 + digit;
    // console.log(reverseNum,digit,x)
    x = Math.floor(x / 10, 0);
  }
  return original === reverseNum;
};
// Runtime 111 ms / Memory 56.52 mb
console.log('isPalindrome with solution as number - Runtime 111 ms / Memory 56.52 mb')
console.log(isPalindrome(9999))
