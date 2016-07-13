// Source : https://leetcode.com/problems/minimum-depth-of-binary-tree/
// Author : Xiao Hu
// Date   : 2016-05-27

/********************************************************************************** 
* 
* Given a binary tree, find its minimum depth.
*
* The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
var minDepth = function(root) {
    
    if(root === null) return 0;
    
    function min(a, b) {
        
        if(a <= b) return a;
        return b;
    }
    
    if(root.left && root.right) return min(minDepth(root.left), minDepth(root.right)) + 1;
    
    if(root.left || root.right) return (minDepth(root.left) || minDepth(root.right)) + 1;
    
    return 1;
};