class Solution:
    def reverse(self, x):
        sign = -1 if x < 0 else 1
        x = abs(x)
        rev = int(str(x)[::-1]) * sign
        return rev if -(2**31) <= rev <= 2**31 - 1 else 0