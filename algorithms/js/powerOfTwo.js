// Source : https://leetcode.com/problems/power-of-two/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
* Given an integer, write a function to determine if it is a power of two.
*          
**********************************************************************************/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    if(n <= 0) return false;
    
    var count = 0; //统计二进制位为1的数量

    while(n > 0) {
        
        if(n & 1) count++;
        n = n >>> 1;
    }
    
    if(count === 1) return true;
    
    return false;
};