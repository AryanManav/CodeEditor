import java.util.HashMap;

class Solution {
  public int[] twoSum(int[] nums, int target) {
    HashMap<Integer, Integer> map = new HashMap<>();
    
    for (int i = 0; i < nums.length; i++) {
      int complement = target - nums[i];
      if (map.containsKey(complement)) {
        return new int[] { map.get(complement), i };
      }
      map.put(nums[i], i);
    }
    
    return new int[] {}; // return empty if no solution
  }

  public static void main(String[] args) {
    Solution sol = new Solution();
    int[] nums = {2, 7, 11, 15};
    int target = 9;
    int[] result = sol.twoSum(nums, target);
    
    if (result.length == 2) {
      System.out.println("Indices: " + result[0] + ", " + result[1]);
    } else {
      System.out.println("No valid pair found.");
    }
  }
}
