export default function isRobotBack(moves: string): true | number[] {
    const executedMoves = new Set()

    let position = [0, 0]

    const movementActions = {
        L: [-1, 0],
        R: [1, 0],
        U: [0, 1],
        D: [0, -1],
    }

    for (let index = 0; index < moves.length; ++index) {
        const move = moves[index]
        const nextMove = moves[index + 1]

        if (move === '*') {
            position[0] += 2 * movementActions[nextMove][0]
            position[1] += 2 * movementActions[nextMove][1]
            index++
        } else if (move === '!') {
            position[0] += -movementActions[nextMove][0]
            position[1] += -movementActions[nextMove][1]
            index++
        } else if (move === '?') {
            if (!executedMoves.has(nextMove)) {
                position[0] += movementActions[nextMove][0]
                position[1] += movementActions[nextMove][1]
            }
            index++
        } else {
            position[0] += movementActions[move][0]
            position[1] += movementActions[move][1]
        }

        if (move in movementActions) {
            executedMoves.add(move)
        } else if (move !== '!') {
            executedMoves.add(nextMove)
        }
    }

    if (position[0] || position[1]) return position

    return true
}
