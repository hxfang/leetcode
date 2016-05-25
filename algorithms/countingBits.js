// Source : https://leetcode.com/problems/counting-bits/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
* Given a non negative integer number num. 
* For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.
*
* Follow up:
*     is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
*	  Space complexity should be O(n).
*	  Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
*          
**********************************************************************************/

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    
    var arr = [0];
    
    for(var i = 1; i <= num; i++) {
        
        var n = Math.floor(Math.log(i)/Math.LN2);
        var j = Math.pow(2, n);
        arr[i] = arr[i - j] + 1;
    }
    
    return arr;
};