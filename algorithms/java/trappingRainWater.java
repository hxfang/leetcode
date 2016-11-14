// Source : https://leetcode.com/problems/trapping-rain-water/
// Author : Xiao Hu
// Date   : 2016-11-14

/**********************************************************************************
 *
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it is able to trap after raining.
 *
 * For example,
 * Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
 *
 **********************************************************************************/

public class Solution {


    public int trap(int[] height) {
        if(height.length <= 1) return 0;

        int result = 0;
        int start = 0;
        int end = height.length - 1;


        result = trap0(height, result, start, end);
        return result;
    }

    public static int trap0(int height[], int result, int start, int end) {

        if (end - start <= 1)
            return result;

        int max1 = -1, max2 = -1;
        int max1Index = 0, max2Index = 0;

        for(int i = start; i < end + 1; i++) {
            if(height[i] > max1) {
                max2= max1;
                max2Index = max1Index;
                max1 = height[i];
                max1Index = i;
            } else if(height[i] > max2) {
                max2 = height[i];
                max2Index = i;
            }
        }

        int left = Math.min(max1Index, max2Index);
        int right = Math.max(max1Index, max2Index);
        int gap = right - left;
        if(gap > 1) {
            for(int i = left + 1; i < right; i++) {
                result = result + max2 - height[i];
            }
        }

        result = trap0(height, result ,start, left);
        result = trap0(height, result, right, end);

        return result;
    }
}