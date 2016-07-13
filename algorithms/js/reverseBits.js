// Source : https://leetcode.com/problems/reverse-bits/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
* Reverse bits of a given 32 bits unsigned integer.
* 
* For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), 
* return 964176192 (represented in binary as 00111001011110000010100101000000).
*          
**********************************************************************************/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var index = 0;
    var result = 0;
    
    while(n !== 0) {
        arr[index] = n & 1;
        index++;
        n = n >>> 1;
    }

    if(!arr) return 0;

    // JavaScript进行位运算时采用的是有符号整型，超过（2的-31次方到2的31次方减一）会出问题，
    // 所以要将有符号整型转换成无符号整型（0到2的32次方减一），利用（>>>0）即可
    for(i = 0, j = arr.length - 1; i < j; i++) {
        result += arr[i];
        result = Math.abs((result << 1) >>> 0);
    }
    
    result += arr[arr.length - 1];
    
    return result;
};