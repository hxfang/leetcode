// Source : https://leetcode.com/problems/majority-element/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
* Given an array of size n, find the majority element. 
* The majority element is the element that appears more than Math.floor(n/2) times.
* 
* You may assume that the array is non-empty and the majority element always exist in the array.    
*       
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var times_arr = [];
    var num;
    var majority_times = Math.floor(nums.length/2);

    
    for(var i = 0, j = nums.length; i < j; i++) {
        
        if(times_arr[nums[i]]) {
            times_arr[nums[i]]++; 
        } else {
            times_arr[nums[i]] = 1; 
        }
        
        if(times_arr[nums[i]] > majority_times) {
            num = nums[i];
        }
    }
    
    return num;
};