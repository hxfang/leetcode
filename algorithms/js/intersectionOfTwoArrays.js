// Source : https://leetcode.com/problems/intersection-of-two-arrays/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
* Given two arrays, write a function to compute their intersection.
*
* Example: Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
*       
* Note:
*     Each element in the result must be unique.
*     The result can be in any order.
* 
**********************************************************************************/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var nums3 = [];
    var nums4 = [];
    
    function isInNums(nums, num) {
        
        for(var i = 0, j = nums.length; i < j; i++) {
            
            if(nums[i] === num) {
                return true;
            }
        }
        return false;
    }
    
    for(var i = 0, j = nums2.length; i < j; i++) {
        
        if(!isInNums(nums3, nums2[i])) {
            nums3.push(nums2[i]);
        }
    }
    
    for(var m = 0, n = nums3.length; m < n; m++) {
        
        if(isInNums(nums1, nums3[m])) {
            nums4.push(nums3[m]);
        }
    }
    
    return nums4;
};