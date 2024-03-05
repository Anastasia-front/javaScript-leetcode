/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    let prev1 = 1;
    let prev2 = 2;
    for (let index = 3; index <= n; index++) {
      let current = prev1 + prev2;
      prev1 = prev2;
      prev2 = current;
    }
    return prev2;
  }
};

// Runtime 50 ms / Memory 48.74 mb

console.log(climbStairs(1));
console.log(climbStairs(3));
