export default function decodeFilename(filename: string): string {
    const regex = /[a-zA-Z]+[-_a-zA-Z]+\.[a-zA-Z]+/g
    const matches = filename.match(regex)

    if (!matches) return ''

    return matches[0]
}
