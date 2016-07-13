// Source : https://leetcode.com/problems/reverse-string/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
* Write a function that takes a string as input and returns the string reversed.
*
* Example: Given s = "hello", return "olleh".
*          
**********************************************************************************/

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var t = '';
    
    for(var i = s.length, j = 0; i > j; i-- ) {
	    t = t + s.charAt(i-1);
    }
    
    return t;
};