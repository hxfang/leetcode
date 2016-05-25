// Source : https://leetcode.com/problems/divide-two-integers/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
* Divide two integers without using multiplication, division and mod operator. 
* 
* If it is overflow, return MAX_INT.
*            
**********************************************************************************/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
    if(dividend === 0 || divisor === 0) return 0;
    
    if(dividend === -2147483648 && divisor === -1) return 2147483647;
    
    var div1 = Math.abs(dividend);
    var div2 = Math.abs(divisor);
    
    var result = 0,
        temp = div2, 
        multiple = 1;
    
    while(div1 >= div2) {
        temp = div2;
        multiple = 1;

        while((div1 >> 1) >= temp) {
            temp = temp << 1;
            multiple <<= 1;
        }
        
        div1 -= temp;
        result += multiple;
    }

    if((dividend < 0) ^ (divisor < 0)) result = -result;
    
    return result;
};