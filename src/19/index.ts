export default function distributeWeight(weight: number): string {
    const boxRepresentations = {
        1: [' _ ', '|_|'],
        2: [' ___ ', '|___|'],
        5: [' _____ ', '|     |', '|_____|'],
        10: [' _________ ', '|         |', '|_________|'],
    }

    const distributedBoxes: string[][] = []

    while (weight > 0) {
        let boxWeight = 0
        for (const key of Object.keys(boxRepresentations).reverse()) {
            if (Number(key) <= weight) {
                boxWeight = Number(key)
                break
            }
        }

        distributedBoxes.push(boxRepresentations[boxWeight])
        weight -= boxWeight
    }

    distributedBoxes.reverse()

    let result = ''

    distributedBoxes.forEach((box, index) => {
        let firstLine = ''
        if (index === 0) {
            firstLine = box[0]
        } else {
            firstLine = box[0].slice(distributedBoxes[index - 1].at(-1)?.length).trim()
        }

        result += firstLine + '\n'
        for (const line of box.slice(1, -1)) {
            result += line + '\n'
        }
        result += box.at(-1)
    })

    return result
}
