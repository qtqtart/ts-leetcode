import type { TreeNode } from "@/lib/tree-node";

const isSymmetric = (root: TreeNode | null) => {
  if (!root) return true;

  return helper(root.left, root.right);
};

const helper = (
  treeNode1: TreeNode | null,
  treeNode2: TreeNode | null,
): boolean => {
  if (!treeNode1 || !treeNode2) return treeNode1 === treeNode2;
  if (treeNode1.val !== treeNode2.val) return false;

  return (
    helper(treeNode1.left, treeNode2.right) &&
    helper(treeNode1.right, treeNode2.left)
  );
};

export default isSymmetric;
