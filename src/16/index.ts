export default function removeSnow(s: string): string {
    let stack: string[] = []
    for (const char of s) {
        if (stack.at(-1) === char) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return stack.join('')
}
