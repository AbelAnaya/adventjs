export default function inBox(box: string[]): boolean {
    return box.some((row, index) => {
        const presentIndex = row.indexOf('*')
        const isEdgeRow = presentIndex > 0 && presentIndex < row.length - 1
        const isEdgeColumn = index < box.length - 1 && index > 0

        return isEdgeRow && isEdgeColumn
    })
}
