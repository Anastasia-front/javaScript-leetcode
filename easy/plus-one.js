/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let digitStr = "";

  digits.forEach((digit) => {
    digitStr += String(digit);
  });

  const bigIntValue = BigInt(digitStr);
  const incrementedValue = bigIntValue + BigInt(1);

  const plusOneStr = String(incrementedValue);
  const result = plusOneStr.split("");
  result.forEach((digit) => {
    Number(digit);
  });

  return result;
};

// Runtime 50 ms / Memory 48.73 mb

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
