export const JAVA_QUES = [
  {
    "question": "Two Sum",
    "problem": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "code": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement)) {\n                return new int[] { map.get(complement), i };\n            }\n            map.put(nums[i], i);\n        }\n        throw new IllegalArgumentException(\"No two sum solution\");\n    }\n}"
  },
  {
    "question": "Reverse Integer",
    "problem": "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range, return 0.",
    "code": "class Solution {\n    public int reverse(int x) {\n        long rev = 0;\n        while (x != 0) {\n            rev = rev * 10 + x % 10;\n            x /= 10;\n        }\n        if (rev > Integer.MAX_VALUE || rev < Integer.MIN_VALUE) {\n            return 0;\n        }\n        return (int) rev;\n    }\n}"
  },
  {
    "question": "Palindrome Number",
    "problem": "Given an integer x, return true if x is a palindrome, and false otherwise.",
    "code": "class Solution {\n    public boolean isPalindrome(int x) {\n        if (x < 0 || (x % 10 == 0 && x != 0)) {\n            return false;\n        }\n        int revertedNumber = 0;\n        while (x > revertedNumber) {\n            revertedNumber = revertedNumber * 10 + x % 10;\n            x /= 10;\n        }\n        return x == revertedNumber || x == revertedNumber / 10;\n    }\n}"
  },
  {
    "question": "Roman to Integer",
    "problem": "Given a Roman numeral, convert it to an integer.",
    "code": "class Solution {\n    public int romanToInt(String s) {\n        Map<Character, Integer> map = new HashMap<>();\n        map.put('I', 1);\n        map.put('V', 5);\n        map.put('X', 10);\n        map.put('L', 50);\n        map.put('C', 100);\n        map.put('D', 500);\n        map.put('M', 1000);\n        int result = 0;\n        for (int i = 0; i < s.length(); i++) {\n            if (i > 0 && map.get(s.charAt(i)) > map.get(s.charAt(i - 1))) {\n                result += map.get(s.charAt(i)) - 2 * map.get(s.charAt(i - 1));\n            } else {\n                result += map.get(s.charAt(i));\n            }\n        }\n        return result;\n    }\n}"
  },
  {
    "question": "Longest Common Prefix",
    "problem": "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string \"\".",
    "code": "class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        if (strs == null || strs.length == 0) return \"\";\n        String prefix = strs[0];\n        for (int i = 1; i < strs.length; i++) {\n            while (strs[i].indexOf(prefix) != 0) {\n                prefix = prefix.substring(0, prefix.length() - 1);\n                if (prefix.isEmpty()) return \"\";\n            }\n        }\n        return prefix;\n    }\n}"
  },
  {
    "question": "Valid Parentheses",
    "problem": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    "code": "class Solution {\n    public boolean isValid(String s) {\n        Stack<Character> stack = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (c == '(') stack.push(')');\n            else if (c == '{') stack.push('}');\n            else if (c == '[') stack.push(']');\n            else if (stack.isEmpty() || stack.pop() != c) return false;\n        }\n        return stack.isEmpty();\n    }\n}"
  },
  {
    "question": "Merge Two Sorted Lists",
    "problem": "Merge two sorted linked lists and return it as a sorted list.",
    "code": "class Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        ListNode dummy = new ListNode(-1);\n        ListNode current = dummy;\n        while (l1 != null && l2 != null) {\n            if (l1.val <= l2.val) {\n                current.next = l1;\n                l1 = l1.next;\n            } else {\n                current.next = l2;\n                l2 = l2.next;\n            }\n            current = current.next;\n        }\n        current.next = l1 == null ? l2 : l1;\n        return dummy.next;\n    }\n}"
  },
  {
    "question": "Remove Duplicates from Sorted Array",
    "problem": "Given a sorted array nums, remove the duplicates in-place such that each unique element appears only once and return the new length.",
    "code": "class Solution {\n    public int removeDuplicates(int[] nums) {\n        if (nums.length == 0) return 0;\n        int i = 0;\n        for (int j = 1; j < nums.length; j++) {\n            if (nums[j] != nums[i]) {\n                i++;\n                nums[i] = nums[j];\n            }\n        }\n        return i + 1;\n    }\n}"
  },
  {
    "question": "Remove Element",
    "problem": "Given an integer array nums and an integer val, remove all occurrences of val in-place and return the new length.",
    "code": "class Solution {\n    public int removeElement(int[] nums, int val) {\n        int i = 0;\n        for (int j = 0; j < nums.length; j++) {\n            if (nums[j] != val) {\n                nums[i] = nums[j];\n                i++;\n            }\n        }\n        return i;\n    }\n}"
  },
  {
    "question": "Implement strStr()",
    "problem": "Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
    "code": "class Solution {\n    public int strStr(String haystack, String needle) {\n        if (needle.isEmpty()) return 0;\n        for (int i = 0; i <= haystack.length() - needle.length(); i++) {\n            if (haystack.substring(i, i + needle.length()).equals(needle)) {\n                return i;\n            }\n        }\n        return -1;\n    }\n}"
  }
];
