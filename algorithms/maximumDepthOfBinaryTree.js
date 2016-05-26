// Source : https://leetcode.com/problems/reverse-string/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
* Given a binary tree, find its maximum depth.
*
* The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*          
**********************************************************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if(root === null) return 0;
    
    function max(a, b) {
		
        if(a >= b) return a;
        return b;
    }
    
    return max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};