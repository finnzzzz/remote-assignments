function twoSum(nums, target) {
  let i;
  let y;
  for (i = 0; i < nums.length - 1; i++) {
    for (y = 1; y < nums.length; y++) {
      if (nums[i] + nums[y] === target) {
        return [i, y];
      }
    }
  }
  return "no answer";
}

console.log(twoSum([2, 7, 11, 15], 9)); //[0,1]

