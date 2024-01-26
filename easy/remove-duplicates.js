/**
 * @param {number[]} numbers
 * @return {number}
 */
var removeDuplicates = function (numbers) {
  let slow = 0;

  for (let i = 1; i < numbers.length; i++) {
    const element = numbers[i];
    if (numbers[slow] !== element) {
      slow++;
      numbers[slow] = element;
    }
  }

  return slow + 1;
};

// Runtime 64 ms / Memory 51.84 mb

nums1 = [1, 1, 2];
k1 = removeDuplicates(nums1);
console.log(`Output: ${k1}, nums = ${Array(nums1.slice(0, k1))}`);

nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
k2 = removeDuplicates(nums2);
console.log(`Output: ${k2}, nums = ${Array(nums2.slice(0, k2))}`);

nums3 = [1, 1, 1, 1, 1, 2];
k3 = removeDuplicates(nums2);
console.log(`Output: ${k3}, nums = ${Array(nums3.slice(0, k3))}`);
