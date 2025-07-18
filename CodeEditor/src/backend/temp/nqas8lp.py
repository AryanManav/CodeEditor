def binary_search(nums, target):
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
    print(result)