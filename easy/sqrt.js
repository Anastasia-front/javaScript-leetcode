/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 1 || x === 0) {
    return x;
  }

  let result = 0;
  let left = 1;
  let right = x;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
};

// Runtime 72 ms / Memory 53.28 mb

console.log(mySqrt(4));
console.log(mySqrt(8));
