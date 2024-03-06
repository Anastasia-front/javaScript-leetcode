/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let difference;
  const indices = {};
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    difference = target - element;
    console.log(`Checking number: ${numbers[index]}, complement: ${difference}`);

    if (indices[difference] !== undefined) {
        console.log(`Found pair: [${indices[numbers[index]]}, ${index}]`);

      return [indices[difference], index];
    } else {
      indices[numbers[index]] = index;
    }
  }
  return []
};

// Runtime 57 ms / Memory 49.36 mb

console.log(twoSum([2, 3, 4, 5, 6, 7], 15));
console.log(twoSum([22, 13, 34, 52, 61, 70], 35));
