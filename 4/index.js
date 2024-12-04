function createXmasTree(height, ornament) {
    let BODY = ''

    for (let i = 0; i < height; i++) {
        const LINE_UNDERSCORES = '_'.repeat(height - 1 - i)
        const LINE = LINE_UNDERSCORES + ornament.repeat(1 + 2 * i) + LINE_UNDERSCORES + '\n'
        BODY += LINE
    }

    const FOOTER_UNDERSCORES = '_'.repeat(height - 1)
    const FOOTER_LINE = FOOTER_UNDERSCORES + '#' + FOOTER_UNDERSCORES
    const FOOTER = FOOTER_LINE + '\n' + FOOTER_LINE

    const OUTPUT = BODY + FOOTER
    return OUTPUT
}

console.log(createXmasTree(6, '*'))
