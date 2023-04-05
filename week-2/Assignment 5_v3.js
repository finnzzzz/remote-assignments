function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return "no answer";
}

console.log(twoSum([2, 11, 15, 7], 9)); //[0,1]

// 使用map來儲存數組中的值與index
// for循環判斷map數據中有沒有對應的差值，沒有的話將當前值儲存進入map
// map.get() 獲取map中相對應值的index
// 遍歷一次數組即可找出解答