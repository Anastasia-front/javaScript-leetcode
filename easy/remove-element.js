/**
 * @param {number[]} numbers
 * @param {number} val
 * @return {number}
 */
var removeElement = function (numbers, val) {
  if (numbers.length === 0) {
    return 0;
  }

  let result = 0;
  numbers.forEach((number) => {
    if (number !== val) {
      numbers[result] = number;
      result++;
    }
  });

  return result;
};

// Runtime 55 ms / Memory 48.78 mb

const num1 = [4, 3, 2, 1, 3, 4, 53, 2, 23, 4, 234, 4, 3, 4, 34, 4, 2, 3];
const result1 = removeElement(num1, 4);
console.log(`Output : ${result1}, numbers = ${num1.slice(0, result1)}`);

const num2 = [5,4,3,6,7,8,5,4,5,6,5,4,5,6,5];
const result2 = removeElement(num2, 5);
console.log(`Output : ${result2}, numbers = ${num2.slice(0, result2)}`);