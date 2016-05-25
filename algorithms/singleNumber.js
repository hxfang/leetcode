// Source : https://leetcode.com/problems/single-number/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
* Given an array of integers, every element appears twice except for one. 
* Find that single one.
*            
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = nums[0];
    
    for(var i = 1, j = nums.length; i < j; i++) {
        result = result ^ nums[i];
    }
    
    return result;
};