export default function execute(code: string): number {
    let res = 0
    let loopIndex = -1

    for (let i = 0; i < code.length; ++i) {
        switch (code[i]) {
            case '+':
                res++
                break
            case '-':
                res--
                break
            case '[':
                if (res !== 0) {
                    loopIndex = i
                } else {
                    i = code.slice(i + 1).indexOf(']') + i
                }
                break
            case ']':
                if (res !== 0) {
                    i = loopIndex
                } else {
                    loopIndex = -1
                }
                break
            case '{':
                if (res === 0) {
                    i = code.slice(i).indexOf('}') + i
                }
                break
            default:
                break
        }
    }

    return res
}
