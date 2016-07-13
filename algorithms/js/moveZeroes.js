// Source : https://leetcode.com/problems/move-zeroes/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
* Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*  
* For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
* 
* Note:
*	  You must do this in-place without making a copy of the array.
*	  Minimize the total number of operations.
*   
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    for(var i = 0, j = nums.length, k; i < j; i++) {
        
        if(nums[i] === 0) {
            k = i;
            
            while(nums[k] === 0 && k < j - 1) {
                k++;
            }
            nums[i] = nums[k];
            nums[k] = 0;
        }
    }
};
