// Source : https://leetcode.com/problems/single-number-iii/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
* Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. 
* Find the two elements that appear only once.
* 
* For example: Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].
*
* Note:
*	  The order of the result is not important. So in the above example, [5, 3] is also correct.
*	  Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    
    var diff = 0;
    var two = [0, 0];
    
    for(var i = 0, j = nums.length; i < j; i++) {
        diff ^= nums[i];
    }
    
    diff &= -diff;
    
    for(var k in nums) {
    	var num = nums[k];

        if((num & diff) == 0) {
            two[0] ^= num;
        } else {
            two[1] ^= num;
        }
    }
    
    return two;
};