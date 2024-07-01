import type { TreeNode } from "@/lib/tree-node";

const inorderTraversal = (root: TreeNode | null): number[] => {
  const result: number[] = [];

  helper(root, result);

  return result;
};

const helper = (node: TreeNode | null, numbers: number[]): void => {
  if (!node) return;

  helper(node.left, numbers);
  numbers.push(node.val);
  helper(node.right, numbers);
};

export default inorderTraversal;
