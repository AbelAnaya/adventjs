export type Board = String[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

export default function moveTrain(board: Board, mov: Movement): Result {
    const movActions = {
        U: -board[0].length - 1,
        D: +board[0].length + 1,
        L: -1,
        R: +1,
    }

    const resultMap = {
        '*': 'eat',
        o: 'crash',
        '@': 'crash',
        '·': 'none',
        undefined: 'crash',
        '|': 'crash',
    }

    const vectorizedBoard = board.join('|').toString()
    const trainIndex = vectorizedBoard.indexOf('@')

    return resultMap[vectorizedBoard[trainIndex + movActions[mov]]]
}
