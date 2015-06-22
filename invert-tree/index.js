module.exports = function invertTree(tree) {
  if (tree.right) {
    tmp = tree.left
    tree.left = tree.right;
    tree.right = tmp;
    invertTree(tree.right);
    invertTree(tree.left);
  }
}
