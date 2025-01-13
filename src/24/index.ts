export default function isTreesSynchronized(
    tree1: { value: string; left?: any; right?: any } | undefined,
    tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
    const result: [boolean, string] = [tree1?.value === tree2?.value, String(tree1?.value)]

    if (!tree1?.left || !tree2?.left) return result

    const sharedRoot = tree1?.value === tree2?.value
    let isMirror = tree1?.left?.value === tree2?.right?.value
    isMirror &&= tree1?.right?.value === tree2?.left?.value
    isMirror &&= isTreesSynchronized(tree1?.left, tree2?.right)[0]
    isMirror &&= isTreesSynchronized(tree1?.right, tree2?.left)[0]

    result[0] = sharedRoot && isMirror

    return result
}
