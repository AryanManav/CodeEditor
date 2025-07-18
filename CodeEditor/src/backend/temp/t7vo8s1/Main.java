import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String[] parts = sc.nextLine().split(" ");
    int[] nums = new int[parts.length];
    for (int i = 0; i < parts.length; i++) {
      nums[i] = Integer.parseInt(parts[i]);
    }
    int target = Integer.parseInt(sc.nextLine());

    int[] res = twoSum(nums, target);
    System.out.println(res[0] + " " + res[1]);
  }

  public static int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      int complement = target - nums[i];
      if (map.containsKey(complement)) {
        return new int[]{map.get(complement), i};
      }
      map.put(nums[i], i);
    }
    return new int[]{-1, -1};
  }
}
