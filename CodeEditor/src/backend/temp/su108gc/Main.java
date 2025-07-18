import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] nums = new int[4];
        for (int i = 0; i < 4; i++) nums[i] = sc.nextInt();
        int target = sc.nextInt();
        
        Solution obj = new Solution();
        int[] ans = obj.twoSum(nums, target);
        for (int val : ans) System.out.print(val + " ");
    }
}

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int rem = target - nums[i];
            if (map.containsKey(rem)) return new int[]{map.get(rem), i};
            map.put(nums[i], i);
        }
        return new int[]{-1, -1};
    }
}
