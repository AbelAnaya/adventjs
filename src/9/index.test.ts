import fn from './index'

describe('Challenge 09: The magic train', () => {
    const board = ['·····', '*····', '@····', 'o····', 'o····']

    it('Test 01', () => {
        const mov = 'U'
        const result = fn(board, mov)
        const expected = 'eat'

        expect(result).toBe(expected)
    })

    it('Test 02', () => {
        const mov = 'D'
        const result = fn(board, mov)
        const expected = 'crash'

        expect(result).toBe(expected)
    })

    it('Test 03', () => {
        const mov = 'L'
        const result = fn(board, mov)
        const expected = 'crash'

        expect(result).toBe(expected)
    })

    it('Test 04', () => {
        const mov = 'R'
        const result = fn(board, mov)
        const expected = 'none'

        expect(result).toBe(expected)
    })
})
