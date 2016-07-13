// Source : https://leetcode.com/problems/binary-tree-level-order-traversal/
// Author : Xiao Hu
// Date   : 2016-05-29

/********************************************************************************** 
* 
* Given a binary tree, return the level order traversal of its nodes' values. 
* (ie, from left to right, level by level).
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var order = []; //结果二维数组
    var queue = []; //保存当前level的node
    
    if(!root) return order;
    
    queue.push(root);
    var len, subOrder;
    
    while(queue.length) {
        len = queue.length;
        subOrder = [];
        
        for(var i = 0; i < len; i++) {
            
            if(queue[0].left) queue.push(queue[0].left);
            if(queue[0].right) queue.push(queue[0].right);
            subOrder.push(queue.shift().val);
        }
        order.push(subOrder);
    }

    return order;
};