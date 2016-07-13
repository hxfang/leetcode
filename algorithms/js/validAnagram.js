// Source : https://leetcode.com/problems/valid-anagram/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
* Given two strings s and t, write a function to determine if t is an anagram of s.
*
* For example,
* s = "anagram", t = "nagaram", return true.
* s = "rat", t = "car", return false.
*
* Note: You may assume the string contains only lowercase alphabets.
*
* Follow up: What if the inputs contain unicode characters? How would you adapt your solution to such case?
*          
**********************************************************************************/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var map = {};
    
    for(var i = 0, j = s.length; i < j; i++) {
        map[s.charAt(i)] =  map[s.charAt(i)] || 0;
        map[s.charAt(i)]++;
    }

    for(var m = 0, n = t.length; m < n; m++) {    
        map[t.charAt(m)] =  map[t.charAt(m)] || 0;
        map[t.charAt(m)]--;
    }

    for(var k in map) {

    	if(map[k] !== 0) return false; 
    }
    
    return true;
};