/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (numbers, target) {
  if (target > numbers[numbers.length - 1]) {
    return numbers.length;
  }

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    if (target <= element) {
      return i;
    } else {
      continue;
    }
  }
};

// Runtime 58 ms / Memory 48.92 mb

console.log(searchInsert((numbers = [1, 3, 5, 6]), (target = 5)));
console.log(searchInsert((numbers = [1, 3, 5, 6]), (target = 2)));
console.log(searchInsert((numbers = [1, 3, 5, 6]), (target = 7)));
