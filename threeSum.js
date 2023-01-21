
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const map = new Map();
  const put = (triade) => {
    triade.sort();
    const key = triade.join(',');
    map.set(key, triade);
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          put([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  console.log(map)

  return Array.from(map.values())
};

const arr = [-1,0,1,2,-1,-4];
console.log(threeSum(arr));
