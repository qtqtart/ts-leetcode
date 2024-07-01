import type { TreeNode } from "@/lib/tree-node";

const isSameTree = (treeNode1: TreeNode | null, treeNode2: TreeNode | null) => {
  if (!treeNode1 || !treeNode2) return treeNode1 === treeNode2;
  if (treeNode1.val !== treeNode2.val) return false;

  return (
    isSameTree(treeNode1.left, treeNode2.left) &&
    isSameTree(treeNode1.right, treeNode2.right)
  );
};

export default isSameTree;
