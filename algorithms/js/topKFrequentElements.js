// Source : https://leetcode.com/problems/top-k-frequent-elements/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
* Given a non-empty array of integers, return the k most frequent elements.
*
* Example: Given [1,1,1,2,2,3] and k = 2, return [1,2].
*          
* Note: 
*     You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
*     Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var frequencyMap = {};
    var frequencyArr = [];
    var kArr = [];
    
    for(var i in nums) {
        frequencyMap[nums[i]] = frequencyMap[nums[i]] || 0;
        frequencyMap[nums[i]]++;
    }
    
    for(var j in frequencyMap) {
        frequencyArr[frequencyMap[j]] = frequencyArr[frequencyMap[j]] || [];
        frequencyArr[frequencyMap[j]].push(Number(j));
    }
    
    for(var m = frequencyArr.length -1; m >= 0 && kArr.length < k; m--) {
        
        if(frequencyArr[m] !== null) {
            
            for(var n in frequencyArr[m]) {
                kArr.push(frequencyArr[m][n]);
            }
        }
    }
    
    return kArr;
};