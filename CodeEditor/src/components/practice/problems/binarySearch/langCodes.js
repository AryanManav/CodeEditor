export const LANGUAGE_CODE = {
  java: `public class Main {
    public static void main(String[] args) {
        int[] nums = {-1, 0, 3, 5, 9, 12};
        int target = 9;

        int result = binarySearch(nums, target);
        System.out.println(result);
    }

    public static int binarySearch(int[] nums, int target) {
        int low = 0, high = nums.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target)
                return mid;
            else if (nums[mid] < target)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return -1; // target not found
    }
}`,

  python: `def binary_search(nums, target):
    low, high = 0, len(nums) - 1
    while low <= high:
        mid = (low + high) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1  # target not found

if __name__ == "__main__":
    nums = [-1, 0, 3, 5, 9, 12]
    target = 9
    result = binary_search(nums, target)
    print(result)`
};
