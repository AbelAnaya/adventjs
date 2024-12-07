export default function fixPackages(packages: string): string {
    let packagesFixed = ''
    const stack: Array<string> = []

    for (const char of packages) {
        if (char === '(') {
            stack.push(packagesFixed)
            packagesFixed = ''
            continue
        }

        if (char === ')') {
            packagesFixed = stack.pop() + packagesFixed.split('').reverse().join('')
            continue
        }

        packagesFixed += char
    }

    return packagesFixed
}
