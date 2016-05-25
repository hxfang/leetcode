// Source : https://leetcode.com/problems/power-of-four/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
* Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
*
* Follow up: Could you do it without using any loop / recursion?
*          
**********************************************************************************/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    
    return num === 1 || num === 4 || num === 16 ||num === 64 || num === 256 || num === 1024 || 
           num === 4096 || num === 16384 || num === 16384 || num === 65536 || 
           num === 262144 || num === 1048576 || num === 4194304 || num === 4194304 ||
           num === 16777216 || num === 67108864 || num === 268435456 || num === 1073741824;
           
    //return num > 0 && (num&(num-1)) == 0 && (num & 0x55555555) != 0;
    //1. 是否是正数
    //2. 是否是2的倍数，二进制位只有一个为1
    //3. 1是否在奇数位上，十六进制0x55555555奇数位为1偶数位为0
};