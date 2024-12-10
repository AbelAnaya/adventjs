export default function compile(instructions: string[]): number {
    let registerStatus = {}
    const instructionsSplitted = instructions.map((instruction) => instruction.split(' '))

    for (let index = 0; index < instructionsSplitted.length; ++index) {
        const instructionSplitted = instructionsSplitted[index]

        const verb = instructionSplitted[0]
        const arg1 = instructionSplitted[1]
        const arg2 = instructionSplitted[2]

        if (verb === 'MOV') {
            registerStatus[arg2] = isNaN(Number(arg1)) ? registerStatus[arg1] : Number(arg1)
        } else if (verb === 'INC') {
            registerStatus[arg1] ??= 0
            registerStatus[arg1]++
        } else if (verb === 'DEC') {
            registerStatus[arg1] ??= 0
            registerStatus[arg1]--
        } else if (verb === 'JMP' && !registerStatus[arg1]) {
            index = Number(arg2) - 1
        }
    }

    return registerStatus['A']
}
