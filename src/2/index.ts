export default function createFrame(names: string[]): string {
    let longestName = 0

    for (const name of names) {
        if (name.length > longestName) longestName = name.length
    }

    let output = '*'.repeat(longestName + 4) + '\n'

    for (const name of names) output += `* ${name} ${' '.repeat(longestName - name.length)}*\n`

    output += '*'.repeat(longestName + 4)

    return output
}
