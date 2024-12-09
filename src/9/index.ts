export type Board = Array<String>
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

export default function moveTrain(board: Board, mov: Movement): Result {
    function checkStatus(trainPosition: Array<number>): Result {
        if (trainPosition[0] < 0 || trainPosition[1] < 0) return 'crash'
        if (trainPosition[0] >= board.length || trainPosition[1] >= board[0].length) return 'crash'
        const positionChar = board[trainPosition[0]][trainPosition[1]]

        if (positionChar === '*') return 'eat'
        if (positionChar === '@' || positionChar === 'o') return 'crash'

        return 'none'
    }

    let trainPosition = [0, 0]

    board.forEach((row, index) => {
        if (row.indexOf('@') !== -1) {
            trainPosition = [index, row.indexOf('@')]
        }
    })

    switch (mov) {
        case 'U':
            trainPosition[0]--
            break

        case 'D':
            trainPosition[0]++
            break

        case 'L':
            trainPosition[1]--
            break

        case 'R':
            trainPosition[1]++
            break

        default:
            return 'none'
    }

    const status = checkStatus(trainPosition)
    return status
}
