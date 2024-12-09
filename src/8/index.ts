export default function drawRace(indices: number[], length: number): string {
    let raceRepresentation = ''
    const snow = '~'.repeat(length)

    for (let i = 0; i < indices.length; ++i) {
        let line = snow.split('')

        if (indices[i] > 0) {
            line[indices[i]] = 'r'
        } else if (indices[i] < 0) {
            line[line.length + indices[i]] = 'r'
        }

        raceRepresentation += ' '.repeat(indices.length - i - 1) + line.join('') + ` /${i + 1}\n`
    }

    return raceRepresentation.slice(0, raceRepresentation.length - 1)
}
