// Source : https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
// Author : Xiao Hu
// Date   : 2016-05-30

/********************************************************************************** 
* 
* Given a binary tree, return the zigzag level order traversal of its nodes' 
* values. (ie, from left to right, then right to left for the next level and 
* alternate between).
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
var zigzagLevelOrder = function(root) {
    var order = []; //结果二维数组
    var queue = []; //保存当前level的node
    
    if(!root) return order;
    
    queue.push(root);
    var len, subOrder;
    var alt = false; //是否翻转
    
    while(queue.length) {
        len = queue.length;
        subOrder = [];
        
        for(var i = 0; i < len; i++) {
            if(queue[0].left) queue.push(queue[0].left);
            if(queue[0].right) queue.push(queue[0].right);
            subOrder.push(queue.shift().val);
        }
        
        if(alt) {
            subOrder.reverse();
        }
        alt = !alt;
        
        order.push(subOrder);
    }

    return order;
};