// Source : https://leetcode.com/problems/power-of-three/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
* Given an integer, write a function to determine if it is a power of three.
*
* Follow up: Could you do it without using any loop / recursion?
*          
**********************************************************************************/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return n > 0 && (1162261467 % n === 0);
};