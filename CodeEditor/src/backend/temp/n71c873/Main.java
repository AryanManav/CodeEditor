public class Main {
    public static void main(String[] args) {
        class Solution {
    public int reverse(int x) {
        long rev = 0;
        while (x != 0) {
            rev = rev * 10 + x % 10;
            x /= 10;
        }
        if (rev > Integer.MAX_VALUE || rev < Integer.MIN_VALUE) {
            return 0;
        }
        return (int) rev;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.reverse(123));
    }
}
    }
}