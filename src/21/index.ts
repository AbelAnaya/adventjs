export default function treeHeight(tree: { value: string; left: any; right: any } | null): number {
    if (tree === null) return 0

    const lHeight = treeHeight(tree.left)
    const rHeight = treeHeight(tree.right)

    return Math.max(lHeight, rHeight) + 1
}
