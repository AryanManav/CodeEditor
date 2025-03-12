export const PYTHON_QUES = [
    {
      "question": "Two Sum",
      "problem": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      "code": "class Solution:\n    def twoSum(self, nums, target):\n        num_map = {}\n        for i, num in enumerate(nums):\n            complement = target - num\n            if complement in num_map:\n                return [num_map[complement], i]\n            num_map[num] = i"
    },
    {
      "question": "Reverse Integer",
      "problem": "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range, return 0.",
      "code": "class Solution:\n    def reverse(self, x):\n        sign = -1 if x < 0 else 1\n        x = abs(x)\n        rev = int(str(x)[::-1]) * sign\n        return rev if -(2**31) <= rev <= 2**31 - 1 else 0"
    },
    {
      "question": "Palindrome Number",
      "problem": "Given an integer x, return true if x is a palindrome, and false otherwise.",
      "code": "class Solution:\n    def isPalindrome(self, x):\n        return str(x) == str(x)[::-1]"
    },
    {
      "question": "Roman to Integer",
      "problem": "Given a Roman numeral, convert it to an integer.",
      "code": "class Solution:\n    def romanToInt(self, s):\n        roman_map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}\n        total = 0\n        prev = 0\n        for c in s[::-1]:\n            if roman_map[c] >= prev:\n                total += roman_map[c]\n            else:\n                total -= roman_map[c]\n            prev = roman_map[c]\n        return total"
    },
    {
      "question": "Longest Common Prefix",
      "problem": "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string \"\".",
      "code": "class Solution:\n    def longestCommonPrefix(self, strs):\n        if not strs: return \"\"\n        prefix = strs[0]\n        for s in strs[1:]:\n            while not s.startswith(prefix):\n                prefix = prefix[:-1]\n                if not prefix: return \"\"\n        return prefix"
    },
    {
      "question": "Valid Parentheses",
      "problem": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      "code": "class Solution:\n    def isValid(self, s):\n        stack = []\n        mapping = {')': '(', '}': '{', ']': '['}\n        for char in s:\n            if char in mapping:\n                top = stack.pop() if stack else '#'\n                if mapping[char] != top:\n                    return False\n            else:\n                stack.append(char)\n        return not stack"
    },
    {
      "question": "Merge Two Sorted Lists",
      "problem": "Merge two sorted linked lists and return it as a sorted list.",
      "code": "class Solution:\n    def mergeTwoLists(self, l1, l2):\n        dummy = ListNode(-1)\n        current = dummy\n        while l1 and l2:\n            if l1.val <= l2.val:\n                current.next, l1 = l1, l1.next\n            else:\n                current.next, l2 = l2, l2.next\n            current = current.next\n        current.next = l1 or l2\n        return dummy.next"
    },
    {
      "question": "Remove Duplicates from Sorted Array",
      "problem": "Given a sorted array nums, remove the duplicates in-place such that each unique element appears only once and return the new length.",
      "code": "class Solution:\n    def removeDuplicates(self, nums):\n        if not nums: return 0\n        i = 0\n        for j in range(1, len(nums)):\n            if nums[j] != nums[i]:\n                i += 1\n                nums[i] = nums[j]\n        return i + 1"
    },
    {
      "question": "Remove Element",
      "problem": "Given an integer array nums and an integer val, remove all occurrences of val in-place and return the new length.",
      "code": "class Solution:\n    def removeElement(self, nums, val):\n        i = 0\n        for j in range(len(nums)):\n            if nums[j] != val:\n                nums[i] = nums[j]\n                i += 1\n        return i"
    },
    {
      "question": "Implement strStr()",
      "problem": "Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
      "code": "class Solution:\n    def strStr(self, haystack, needle):\n        return haystack.find(needle)"
    }
  ];
  