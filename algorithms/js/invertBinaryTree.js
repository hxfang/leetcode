// Source : https://leetcode.com/problems/invert-binary-tree/
// Author : Xiao Hu
// Date   : 2016-05-25

/********************************************************************************** 
* 
*      4
*    /   \
*   2     7
*  / \   / \
* 1   3 6   9
*
* to
* 
*      4
*    /   \
*   7     2
*  / \   / \
* 9   6 3   1
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    if(!root) return null; 
    
    var tmp = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = tmp;
    
    return root; //对递归的return有大的误解!!!
};