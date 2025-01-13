export default function isTreesSynchronized(
    tree1: { value: string; left?: any; right?: any } | undefined,
    tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
    const sharedRoot = tree1?.value === tree2?.value
    let isMirror = tree1?.left?.value === tree2?.right?.value
    isMirror &&= tree1?.right?.value === tree2?.left?.value
    isMirror &&= tree1?.right?.right?.value === tree2?.left?.left?.value

    return [sharedRoot && isMirror, String(tree1?.value)]
}
